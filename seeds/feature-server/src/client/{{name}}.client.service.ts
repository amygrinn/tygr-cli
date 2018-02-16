import { Injectable } from '@angular/core';

import { 
    Store,
    Actions$,
    StoreService
} from '@tygr/core';

import { SocketActions } from '@tygr/socket';

import { {{Name}}ClientConfig } from './{{name}}.client.config';
import { clientToServerActions } from '../{{name}}.actions';

@Injectable()
export class {{Name}}ClientService extends StoreService {
  constructor(
    private actions$: Actions$,
    private store: Store
  ) {
    super(actions$, store, new {{Name}}ClientConfig());
    store.dispatch(
      new SocketActions.RegisterClientToServerActions(
        clientToServerActions
      )
    );
  }
}
