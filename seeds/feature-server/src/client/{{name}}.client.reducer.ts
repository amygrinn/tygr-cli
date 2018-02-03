import { Reducer, Action } from '@tygr/core';

import { Client{{Name}}, initialState } from './{{name}}.client.model';

import * as {{Name}}Actions from '../{{name}}.actions';

export const {{name}}ClientReducer: Reducer<Client{{Name}}> = (
  state: Client{{Name}} = initialState,
  action: Action
): Client{{Name}} => {

  switch(action.type) {
    case {{Name}}Actions.{{NAME}}_ACTION:
      return { ...state, prop: 'changed' };

    default:
      return state;
  }
  
};
