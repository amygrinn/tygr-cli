import { StoreConfig, Reducer, Effects } from '@tygr/core'

import { {{NAME}} } from '../{{NAME}}';

import { Client{{Name}} } from './{{name}}.client.model';
import { {{naMe}}ClientReducer } from './{{name}}.client.reducer';
import { {{naMe}}ClientEffects } from './{{name}}.client.effects';

export class {{Name}}ClientConfig implements StoreConfig {
  name = {{NAME}};
  reducer = {{naMe}}ClientReducer;
  effects = {{naMe}}ClientEffects;

  // put client config variables and defaults here
};

export type {{Name}} = {
  ['{{name}}']: Partial<{{Name}}ClientConfig>
}
