import 'rxjs/add/operator/filter';

import {
  Effects,
  Action,
  Store,
  Actions$,
  ofType
} from '@tygr/core';

import { {{Name}}Service } from './{{name}}.service';

import * as {{Name}}Actions from './{{name}}.actions';

export const {{naMe}}Effects: Effects = (
  actions$: Actions$,
  store: Store,
  {{name}}Service: {{Name}}Service
) => {

  actions$
    .filter(ofType({{Name}}Actions.{{NAME}}_ACTION))
    .subscribe(action => {
        console.log(action.type + ' successfully dispatched!');
    }); 
};
