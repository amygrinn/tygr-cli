import { Injectable } from '@angular/core';

import { 
    Store,
    Actions$,
    StoreService
} from '@tygr/core';

import { {{Name}}Config } from './{{name}}.config';

@Injectable()
export class {{Name}}Service extends StoreService {
  constructor(
    private actions$: Actions$,
    private store: Store
  ) {
    super(actions$, store, new {{Name}}Config());
  }
}
