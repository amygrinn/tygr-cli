import * as path from 'path';
import * as Shell from 'shelljs';
import * as CopyTemplateDir from 'copy-template-dir';

import { Program } from './program';

export class Create extends Program {
  names = ['new', 'create'];

  man(index) {
    console.log(index + 'new (create) ?--server [name]')
  }

  exec(args: any[]) {

    let srcDir: string;

    const optIndex = args.indexOf('--server');

    const server: boolean = optIndex >= 0;

    if(server) {
      srcDir = path.join(__dirname, '../seeds/feature-server');
      args.splice(optIndex, 1);
    } else {
      srcDir = path.join(__dirname, '../seeds/feature');
    }

    const input: string = args[0];
    let vars = {};

    let name: string;

    if(input[0] === '@') {
      let tokens = input.split('/');
      vars['prefix'] = tokens[0] + '/';
      name = tokens[1];
    } else {
      vars['prefix'] = '';
      name = input;
    }

    vars['naMe'] = name.replace(/-([a-z])/gi, (s, g1) => g1.toUpperCase() );
    vars['Name'] = vars['naMe'][0].toUpperCase() + vars['naMe'].substring(1);
    vars['name'] = name;
    vars['NAME'] = name.toUpperCase().replace('-', '_');

    vars['blank'] = '';

    let createdDir = path.join(process.cwd(), vars['name']);

    CopyTemplateDir(srcDir, createdDir, vars, () => {
      Shell.cd(createdDir);
      Shell.cd('src');
      Shell.exec('npm i');
      Shell.exec('npm run build');
      Shell.exec('tygr pack');
      Shell.cd('..');
      Shell.exec('ng new demo --skip-git');
      Shell.cd('demo');
      Shell.exec(`npm i --save @tygr/core ${server ? '@tygr/socket' : ''}`);
      Shell.cd('..')
      Shell.exec('git init');
      Shell.exec('git add .');
      Shell.exec('git commit -m "Initial commit"');
    });

    return 'done';
  }
}