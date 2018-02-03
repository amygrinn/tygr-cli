import { NgModule } from '@angular/core';

import { {{Name}}Service } from './{{name}}.service';

@NgModule({
  providers: [{{Name}}Service]
})
export class {{Name}}Module {
  constructor(private {{name}}Service: {{Name}}Service) { }
}
