import { Injectable } from '@angular/core';

import { 
    Store,
    Actions$,
    StoreService
} from '@tygr/core';

import { {{name}}ClientConfig } from './{{name}}.client.config';

@Injectable()
export class {{Name}}ClientService extends StoreService {
  constructor(
    private actions$: Actions$,
    private store: Store
  ) {
    super(actions$, store, {{name}}ClientConfig);
  }
}
