#! /usr/bin/env node
import { Program, CombinedProgram } from './program';

import { Create } from './create';
import { Pack } from './pack';
import { Build } from './build';

class Main extends CombinedProgram {
  constructor() {
    super(
      ['tygr'],
      [
        Create,
        Pack,
        Build
      ],
    );
  }
}

let cli = new Main();
cli.exec(process.argv.slice(2));
