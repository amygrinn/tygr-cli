import * as Shell from 'shelljs';

import { Program } from '../program';

import { getConfig, Location } from './helper';

export function get(configName: string, initialConfig?: any): typeof Program {
  class GetWithOpts extends Get {
    constructor() {
      super(configName, initialConfig);
    }
  }

  return GetWithOpts;
}

class Get extends Program {

  names = ['get'];

  constructor(
    private configName: string,
    private intitialConfig?: any
  ) { super(); }

  man(indent) {
    Shell.echo(indent + this.names[0] + ' [key] ?(--local/global)');
  }

  exec(args: string[]) {

    let localOptIndex = args.indexOf('--local');
    let globalOptIndex = args.indexOf('--global');

    let loc: Location = 'auto';

    if (localOptIndex >= 0 && globalOptIndex >= 0) {
      Shell.echo('No, not both --global and --local, one OR the other or none');
      process.exit(1);
    } else if (localOptIndex >= 0) {
      loc = 'local';
      args.splice(localOptIndex, 1);
    } else if (globalOptIndex >= 0) {
      loc = 'global';
      args.splice(globalOptIndex, 1);
    }

    const conf = getConfig(this.configName, loc);

    const key = args[0];

    if (conf[key]) {
      Shell.echo(`${key}: ${conf[key]}`);
      return conf[key];
    } else {
      if (this.intitialConfig && this.intitialConfig[key]) {
        Shell.echo(`${key}: ${this.intitialConfig[key]}`);
        return this.intitialConfig[key];
      }
      Shell.echo(`${key} does not exist in config`)
      return 'error';
    }
  }
}