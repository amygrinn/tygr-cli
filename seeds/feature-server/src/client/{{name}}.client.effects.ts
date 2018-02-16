import 'rxjs/add/operator/filter';

import {
  Effects,
  Action,
  Store,
  Actions$,
  ofType
} from '@tygr/core';

import { {{Name}}ClientService } from './{{name}}.client.service';

import * as {{Name}}Actions from '../{{name}}.actions';

export const {{naMe}}ClientEffects: Effects = (
  actions$: Actions$,
  store: Store,
  {{naMe}}ClientService: {{Name}}ClientService
) => {

  actions$
    .filter(ofType({{Name}}Actions.{{NAME}}_ACTION))
    .subscribe(action => {
        console.log(action.type + ' successfully dispatched!');
    }); 
};
