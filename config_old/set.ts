import * as Shell from 'shelljs';

import { Program } from '../program';

import { getConfig, setConfig, Location } from './helper';

export function set(configName: string, initialConfig, configOpts?: any): typeof Program {
  class SetWithOpts extends Set {
    constructor() {
      super(configName, initialConfig, configOpts);
    }
  }

  return SetWithOpts;
}

class Set extends Program {
  names = ['set'];

  constructor(
    private configName: string,
    private initialConfig,
    private configOpts?: any
  ) { super(); }

  man(indent) {
    Shell.echo(indent + this.names[0] + ' [key=value] (--local/global)');
  }

  exec(args: string[]) {

    let localOptIndex = args.indexOf('--local');
    let globalOptIndex = args.indexOf('--global');

    let loc: Location;

    if (localOptIndex >= 0 && globalOptIndex >= 0) {
      Shell.echo('No, not both --global and --local, one OR the other');
      process.exit(1);
    } else if (localOptIndex >= 0) {
      loc = 'local';
      args.splice(localOptIndex, 1);
    } else if (globalOptIndex >= 0) {
      loc = 'global';
      args.splice(globalOptIndex, 1);
    } else {
      Shell.echo('Specify either --local or --global');
      process.exit(1);
    }

    const conf = getConfig(this.configName, loc);

    const tokens = args[0].split('=');
    const key = tokens[0];
    const val = tokens[1];

    if (this.initialConfig[key]) {
      if (
        !this.configOpts
        ||
        !this.configOpts[key]
        ||
        this.configOpts[key].indexOf(val) >= 0
      ) {
        conf[key] = val;
        setConfig(this.configName, conf, loc);
        Shell.echo(`${key} = ${val} ${loc === 'local' ? 'locally' : 'globally'}`);
      } else {
        Shell.echo(`'${val}' is not a valid value for '${key}'`);
      }
    } else {
      Shell.echo(`'${key}' is not a valid key`);
    }

    return 'done';
  }
}