import * as Shell from 'shelljs';

import { Program } from "../program";
import { Location, setConfig, getConfig } from './helper';

export function reset(configName: string, initialConfig): typeof Program {
  class ResetWithOpts extends Reset {
    constructor() {
      super(configName, initialConfig);
    }
  }

  return ResetWithOpts;
}

class Reset extends Program {

  names = ['reset'];

  constructor(
    private configName: string,
    private initialConfig
  ) {
    super();
  }

  man(indent) {
    Shell.echo(indent + this.getName() + ' ?[key] (--local/global)');
  }

  exec(args) {

    let localOptIndex = args.indexOf('--local');
    let globalOptIndex = args.indexOf('--global');

    let loc: Location = 'auto';

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

    if (args.length > 0) {
      const key = args[0];

      if (this.initialConfig[key]) {
        setConfig(
          this.configName,
          {
            ...getConfig(this.configName, loc),
            [key]: this.initialConfig[key]
          },
          loc
        );
      }
      return 'done';
    } else {
      setConfig(this.configName, this.initialConfig, loc);
    }
  }
}