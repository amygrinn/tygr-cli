#! /usr/bin/env node
import { Program, CombinedProgram } from './program';

import { ConfigProgram } from './tygr.config';
import { Create } from './create';
import { Install } from './install';
import { Build } from './build';

class Main extends CombinedProgram {
  constructor() {
    super(
      ['tygr'],
      [
        ConfigProgram,
        Create,
        Install,
        Build
      ],
    );
  }
}

let cli = new Main();
cli.exec(process.argv.slice(2));
