import { ServerStoreConfig } from '@tygr/socket'

import { {{NAME}} } from '../{{NAME}}';

import { {{naMe}}ServerReducer } from './{{name}}.server.reducer';
import { {{naMe}}ServerEffects } from './{{name}}.server.effects';
import { {{Name}}ServerService } from './{{name}}.server.service';

import { clientToServerActions } from '../{{name}}.actions';

export const {{naMe}}ServerConfig: ServerStoreConfig = {
  name: {{NAME}},
  reducer: {{naMe}}ServerReducer,
  effects: {{naMe}}ServerEffects,
  service: {{Name}}ServerService,
  clientToServerActions: clientToServerActions

  // put server config variables and defaults here
};
