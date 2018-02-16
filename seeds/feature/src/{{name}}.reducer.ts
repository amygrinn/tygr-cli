import { Reducer, Action } from '@tygr/core';

import { {{Name}}Model, initialState } from './{{name}}.model';

import * as {{Name}}Actions from './{{name}}.actions';

export const {{naMe}}Reducer: Reducer<{{Name}}Model> = (
  state: {{Name}}Model = initialState,
  action: Action
): {{Name}}Model => {

  switch(action.type) {
    case {{Name}}Actions.{{NAME}}_ACTION:
      return { ...state, prop: 'changed' };

    default:
      return state;
  }
  
};
