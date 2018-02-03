import { getConfig } from '@tygr/core';

import { {{NAME}} } from './{{NAME}}';

export class {{Name}}Config {
  // put config variables and defaults here
}

const baseConfig = new {{Name}}Config();

export function {{name}}Config(): Promise<{{Name}}Config> {
  return getConfig({{NAME}}).then(conf => {
    return { ...baseConfig, ...conf };
  });
}
