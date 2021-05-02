import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporativoRoutingModule } from './corporativo-routing.module';
import { CorporativoComponent } from './corporativo.component';
import { SharingModule } from '../sharing/sharing.module';
import { ManterUFComponent } from './manter-uf/manter-uf.component';
import { ManterPessoaComponent } from './manter-pessoa/manter-pessoa.component';


@NgModule({
  declarations: [
    CorporativoComponent,
    ManterUFComponent,
    ManterPessoaComponent
  ],
  imports: [
    CommonModule,
    CorporativoRoutingModule,
    SharingModule,
  ]
})
export class CorporativoModule { }
