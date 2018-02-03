import * as Shell from 'shelljs';

import { Program, CombinedProgram } from '../program';

import { setConfig, getConfig } from './helper';

import { get } from './get';
import { set } from './set';
import { reset } from './reset';
import { remove } from './remove';

export class Config extends CombinedProgram {
  constructor(configName: string, initialConfig, configOpts?: any) {
    super(
      ['config'],
      [
        get(configName, initialConfig),
        set(configName, initialConfig, configOpts),
        reset(configName, initialConfig),
        remove(configName)
      ]
    );

    const globalConf = getConfig(configName, 'global');

    if (Object.keys(globalConf).length === 0) {
      setConfig(configName, initialConfig);
    }
  }
}
