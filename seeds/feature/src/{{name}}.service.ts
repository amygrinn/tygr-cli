import { Injectable } from '@angular/core';

import { 
    Store,
    Actions$,
    StoreService
} from '@tygr/core';

import { {{name}}StoreConfig } from './{{name}}.store.config';

@Injectable()
export class {{Name}}Service extends StoreService {
  constructor(
    private actions$: Actions$,
    private store: Store
  ) {
    super(actions$, store, {{name}}StoreConfig);
  }
}
