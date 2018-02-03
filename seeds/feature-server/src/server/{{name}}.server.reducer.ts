import { Reducer, Action } from '@tygr/core';

import { Server{{Name}}, initialState } from './{{name}}.server.model';

import * as {{Name}}Actions from '../{{name}}.actions';

export const {{name}}ServerReducer: Reducer<Server{{Name}}> = (
  state: Server{{Name}} = initialState,
  action: Action
): Server{{Name}} => {

  switch(action.type) {
    case {{Name}}Actions.{{NAME}}_ACTION:
      return { ...state, prop: 'changed' };

    default:
      return state;
  }
  
};
