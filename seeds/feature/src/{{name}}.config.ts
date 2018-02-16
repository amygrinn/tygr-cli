import { StoreConfig, Reducer, Effects, Middleware } from '@tygr/core';

import { {{NAME}} } from './{{NAME}}';
import { {{Name}}Model } from './{{name}}.model';
import { {{naMe}}Reducer } from './{{name}}.reducer';
import { {{naMe}}Effects } from './{{name}}.effects';

export class {{Name}}Config implements StoreConfig {
  name = {{NAME}};
  reducer = {{naMe}}Reducer;
  effects = {{naMe}}Effects;
  // Put any config variables and defaults here
}

export type {{Name}} = {
  {{name}} : Partial<{{Name}}Config>
};
