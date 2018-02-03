import { NgModule } from '@angular/core';

import { {{Name}}ClientService } from './{{name}}.client.service';

@NgModule({
  providers: [{{Name}}ClientService]
})
export class {{Name}}Module {
  constructor(private {{name}}ClientService: {{Name}}ClientService) { }
}
