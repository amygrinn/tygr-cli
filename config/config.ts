import * as fs from 'fs';

import * as Shell from 'shelljs';

import { Program, CombinedProgram } from '../program';

import { Add } from './add';
import { Get } from './get';
import { Set } from './set';

export class Config extends CombinedProgram {
  constructor() {
    super(
      'config',
      [
        Add,
        Get,
        Set
      ]
    );
  }
}
