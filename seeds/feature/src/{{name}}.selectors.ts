import { Selector } from '@tygr/core';

import { {{NAME}} } from './{{NAME}}';
import { {{Name}}Model } from './{{name}}.model';

const getState: Selector<{{Name}}Model> = (state) => state[{{NAME}}];

export const getProp: Selector<string> = (state) => getState(state).prop;
