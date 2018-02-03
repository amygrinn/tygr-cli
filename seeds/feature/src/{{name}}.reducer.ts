import { Reducer, Action } from '@tygr/core';

import { {{Name}}, initialState } from './{{name}}.model';

import * as {{Name}}Actions from './{{name}}.actions';

export const {{name}}Reducer: Reducer<{{Name}}> = (
  state: {{Name}} = initialState,
  action: Action
): {{Name}} => {

  switch(action.type) {
    case {{Name}}Actions.{{NAME}}_ACTION:
      return { ...state, prop: 'changed' };

    default:
      return state;
  }
  
};
