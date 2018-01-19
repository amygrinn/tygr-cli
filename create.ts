import * as Shell from 'shelljs';

import { Program } from './program';

export class Create extends Program {
  names = ['new', 'create'];
  exec(args: any[]) {
    Shell.echo('create called');
    return 'done';
  }
}