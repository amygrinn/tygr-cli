import * as Shell from 'shelljs';
import * as path from 'path';

import { Program } from './program';
//import { ConfigProgram } from './tygr.config'

export class Install extends Program {
  names = ['install', 'i'];

  man(indent) {
    console.log(indent + "install (i) [pkg-path] ?[options]")
  }

  exec(args: string[]) {
    const path = args[0];
    const options = args[1];
    Shell.exec(`npm i ${options} $(npm pack ${path} | tail -1)`);
    return 'done';
  }
}