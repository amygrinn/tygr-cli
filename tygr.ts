#! /usr/bin/env node
import { Program, CombinedProgram } from './program';

import { Create } from './create';
import { Config } from './config';
import { Pack } from './pack';
import { Build } from './build';

class Main extends CombinedProgram {
  constructor() {
    super(
      ['tygr'],
      [
        Create,
        Config,
        Pack,
        Build
      ],
    );
  }
}

let cli = new Main();
cli.exec(process.argv.slice(2));
