import * as Shell from 'shelljs';

import { Program } from './program';

export class Build extends Program {
  names = ['build', 'b'];

  man(indent) {
    console.log(indent + 'build (b)');
    console.log(indent + '  builds current directory and installs it to ../demo');
  }

  exec(args) {

    Shell.exec('npm run build');
    Shell.exec('tygr pack');
    Shell.cd('../demo');
    Shell.exec('npm i --save ../latest.tgz');

    return 'done';
  }
}