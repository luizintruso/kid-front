import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../sharing/guard/auth.guard';
import { EstoqueComponent } from './estoque.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';

const routes: Routes = [
  { path: '', component: EstoqueComponent },
  { path: 'lista-categorias', component: ListaCategoriaComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
