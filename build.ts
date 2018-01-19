import * as Shell from 'shelljs';

import { Program } from './program';

export class Build extends Program {
  names = ['build']
  man(indent) {
    console.log(indent + 'build [package-name]');
    console.log(indent + '  rebuilds package to update config');
  }

  exec(args) {
    Shell.exec(`npm run --prefix node_modules/${args[0]} build`);
    return '';
  }
}