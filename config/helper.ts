import * as fs from 'fs';

export type Location
  = 'local'
  | 'global'
  | 'auto';

export function getConfig<T = any>(configName: string, loc: Location = 'auto'): T {

  if (loc === 'auto') {
    const localPath = getPath(configName, 'local');
    const globalPath = getPath(configName, 'global');

    let localConf, globalConf;
    if (fs.existsSync(localPath)) {
      localConf = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    } else {
      localConf = {};
    }

    if (fs.existsSync(globalPath)) {
      globalConf = JSON.parse(fs.readFileSync(globalPath, 'utf8'));
    } else {
      globalConf = {};
    }

    return { ...globalConf, ...localConf };

  } else {
    const path = getPath(configName, loc);

    if (fs.existsSync(path)) {
      return JSON.parse(fs.readFileSync(path, 'utf8'));
    } else {
      return {} as T;
    }
  }

}

export function setConfig(configName: string, config, loc: Location = 'global') {
  fs.writeFileSync(getPath(configName, loc), JSON.stringify(config, null, '  '));
}

function getPath(configName: string, loc: Location): string {
  return `${loc === 'local' ? process.cwd() : __dirname}/${configName}`;
}