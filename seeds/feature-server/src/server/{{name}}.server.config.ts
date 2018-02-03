import { ServerStoreConfig } from '@tygr/socket'

import { {{NAME}} } from '../{{NAME}}';

import { {{name}}ServerReducer } from './{{name}}.server.reducer';
import { {{name}}ServerEffects } from './{{name}}.server.effects';
import { {{Name}}ServerService } from './{{name}}.server.service';

import { clientToServerActions } from '../{{name}}.actions';

export const {{name}}ServerConfig: ServerStoreConfig = {
  name: {{NAME}},
  reducer: {{name}}ServerReducer,
  effects: {{name}}ServerEffects,
  service: {{Name}}ServerService,
  clientToServerActions: clientToServerActions
};
