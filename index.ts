#! /usr/bin/env node
import { Program, CombinedProgram } from './program';

import { Config } from './config/config';
import { Create } from './create';
import { Install } from './install';

let cli = new CombinedProgram(
  'tygr',
  [
    Config,
    Create,
    Install
  ],
);

cli.exec(process.argv.slice(2));
