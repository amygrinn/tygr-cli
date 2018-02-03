import { Selector } from '@tygr/core';

import { {{NAME}} } from './{{NAME}}';
import { {{Name}} } from './{{name}}.model';

const getState: Selector<{{Name}}> = (state) => state[{{NAME}}];

export const getProp: Selector<string> = (state) => getState(state).prop;
