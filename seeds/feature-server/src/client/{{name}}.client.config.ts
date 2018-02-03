import { StoreConfig } from '@tygr/core'

import { {{NAME}} } from '../{{NAME}}';

import { {{name}}ClientReducer } from './{{name}}.client.reducer';
import { {{name}}ClientEffects } from './{{name}}.client.effects';

export const {{name}}ClientConfig: StoreConfig = {
  name: {{NAME}},
  reducer: {{name}}ClientReducer,
  effects: {{name}}ClientEffects
};
