import * as Shell from 'shelljs';

import { Program } from './program';
import { ConfigProgram } from './tygr.config'

export class Install extends Program {
  names = ['install', 'i'];
  exec(args: string[]) {
    Shell.echo('install called');
    let config = new ConfigProgram();

    let newDir = config.exec(['get', 'installDir']);
    console.log("got newdir: ", newDir);
    return 'done';

  }
}