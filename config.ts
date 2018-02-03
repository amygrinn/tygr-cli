import * as fs from 'fs';
import * as path from 'path';
import * as Shell from 'shelljs';

import { Program } from './program';

export class Config extends Program {
  names = ['config', 'c']
  man(indent) {
    console.log(indent + 'config (c) ?--watch(-w)');
    console.log(indent + '  transpiles tygr config files');
  }

  exec(args: string[]) {

    let configsPath = path.join(process.cwd(), 'src/configs');
    let configSeedsPath = path.join(__dirname, '../seeds/configs');

    if(!fs.existsSync(configsPath)) {
      fs.mkdirSync(configsPath);
      fs.copyFileSync(path.join(configSeedsPath, 'tsconfig.json'), path.join(configsPath, 'tsconfig.json'));
      fs.copyFileSync(path.join(configSeedsPath, 'tygr.config.ts'), path.join(configsPath, 'tygr.config.ts'));
    }

    Shell.exec(`npx tsc -p ${path.join(configsPath, 'tsconfig.json')} ${args[0] ? args[0] : ''}`);

    return 'done';
  }
}
