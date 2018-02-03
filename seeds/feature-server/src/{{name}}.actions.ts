import { Action } from '@tygr/core';

import { {{NAME}} } from './{{NAME}}';

export class {{Name}}Action implements Action {
  readonly type = {{NAME}}_ACTION;
}

export const {{NAME}}_ACTION = {{NAME}} + ': Action';

// Whitelist for allowed actions to be sent to the server
export const clientToServerActions: string[] = [
  {{NAME}}_ACTION
];
