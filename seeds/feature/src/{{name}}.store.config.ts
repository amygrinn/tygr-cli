import { StoreConfig } from '@tygr/core'

import { {{NAME}} } from './{{NAME}}';

import { {{name}}Reducer } from './{{name}}.reducer';
import { {{name}}Effects } from './{{name}}.effects';

export const {{name}}StoreConfig: StoreConfig = {
  name: {{NAME}},
  reducer: {{name}}Reducer,
  effects: {{name}}Effects
};
