import { Selector } from '@tygr/core';

import { {{NAME}} } from '../{{NAME}}';
import { Server{{Name}} } from './{{name}}.server.model';

const getState: Selector<Server{{Name}}> = (state) => state[{{NAME}}];

export const getProp: Selector<string> = (state) => getState(state).prop;
