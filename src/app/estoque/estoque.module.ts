import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './estoque.component';

import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { SharingModule } from '../sharing/sharing.module';


@NgModule({
  declarations: [
    EstoqueComponent,
    ListaCategoriaComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    SharingModule
  ]
})
export class EstoqueModule { }
