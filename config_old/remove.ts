import * as Shell from 'shelljs';

import { Program } from "../program";
import { Location, setConfig, getConfig } from './helper';

export function remove(configName: string): typeof Program {
  class RemoveWithOpts extends Remove {
    constructor() {
      super(configName);
    }
  }

  return RemoveWithOpts;
}

class Remove extends Program {

  names = ['delete', 'rm'];

  constructor(
    private configName: string,
  ) {
    super();
  }

  man(indent) {
    Shell.echo(indent + this.getName() + ' [key]');
  }

  exec(args) {

    let conf = getConfig(this.configName, 'local');

    const key = args[0];

    if (conf[key]) {
      delete conf[key];
      setConfig(this.configName, conf, 'local');
    } else {
      Shell.echo('Key does not exist in config');
    }

    return 'done';
  }
}