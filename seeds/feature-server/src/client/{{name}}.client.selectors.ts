import { Selector } from '@tygr/core';

import { {{NAME}} } from '../{{NAME}}';
import { Client{{Name}} } from './{{name}}.client.model';

const getState: Selector<Client{{Name}}> = (state) => state[{{NAME}}];

export const getProp: Selector<string> = (state) => getState(state).prop;
