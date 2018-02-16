import * as os from 'os';

//import { Config } from './config';

const git = 'git clone git@10.0.0.69:';

export const TYGR_CONFIG = 'tygr.config.json';

export type TygrConfig = {
  newDir: any;
  newOpts: any;
  installDir: any;
  defaultSeed: any;
  ngSeed: any;
  ngFeatureServerSeed: any;
  ngFeatureSeed: any;
}

export const initialConfig: TygrConfig = {
  newDir: os.homedir() + '/tygr',
  newOpts: '--server --ng',
  installDir: os.homedir() + '/tygr',
  defaultSeed: 'ngFeatureServerSeed',
  ngSeed: 'ng new --skip-git --style scss',
  ngFeatureServerSeed: git + 'seeds/ng-feature-server',
  ngFeatureSeed: git + 'seeds/ng-feature'
}

const configOpts: Partial<TygrConfig> = {
  defaultSeed: [
    'ngSeed',
    'ngFeatureServerSeed',
    'ngFeatureSeed'
  ]
}

/*
export class ConfigProgram extends Config {
  constructor() {
    super(
      TYGR_CONFIG,
      initialConfig,
      configOpts
    );
  }
}
*/