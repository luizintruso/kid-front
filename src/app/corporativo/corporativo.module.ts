import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporativoRoutingModule } from './corporativo-routing.module';
import { CorporativoComponent } from './corporativo.component';
import { SharingModule } from '../sharing/sharing.module';
import { ManterUFComponent } from './manter-uf/manter-uf.component';
import { ManterPessoaComponent } from './manter-pessoa/manter-pessoa.component';
import { ManterPessoaFisicaComponent } from './manter-pessoa/manter-pessoa-fisica/manter-pessoa-fisica.component';
import { ManterPessoaJuridicaComponent } from './manter-pessoa/manter-pessoa-juridica/manter-pessoa-juridica.component';
import { ManterEnderecoPessoaComponent } from './manter-pessoa/manter-endereco-pessoa/manter-endereco-pessoa.component';


@NgModule({
  declarations: [
    CorporativoComponent,
    ManterUFComponent,
    ManterPessoaComponent,
    ManterPessoaFisicaComponent,
    ManterPessoaJuridicaComponent,
    ManterEnderecoPessoaComponent
  ],
  imports: [
    CommonModule,
    CorporativoRoutingModule,
    SharingModule,
  ]
})
export class CorporativoModule { }
