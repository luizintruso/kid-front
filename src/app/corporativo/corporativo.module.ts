import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporativoRoutingModule } from './corporativo-routing.module';
import { CorporativoComponent } from './corporativo.component';
import { SharingModule } from '../sharing/sharing.module';
import { ManterUFComponent } from './manter-uf/manter-uf.component';


@NgModule({
  declarations: [
    CorporativoComponent,
    ManterUFComponent
  ],
  imports: [
    CommonModule,
    CorporativoRoutingModule,
    SharingModule,
  ]
})
export class CorporativoModule { }
