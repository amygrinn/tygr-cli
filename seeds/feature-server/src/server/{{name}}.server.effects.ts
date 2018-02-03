import 'rxjs/add/operator/filter';

import {
  Effects,
  Action,
  Store,
  Actions$,
  ofType
} from '@tygr/core';

import { {{Name}}ServerService } from './{{name}}.server.service';

import * as {{Name}}Actions from '../{{name}}.actions';

export const {{name}}ServerEffects: Effects = (
  actions$: Actions$,
  store: Store,
  {{Name}}ServerService
) => {

  actions$
    .filter(ofType({{Name}}Actions.{{NAME}}_ACTION))
    .subscribe(action => {
        console.log(action.type + ' successfully dispatched!');
    }); 
};
