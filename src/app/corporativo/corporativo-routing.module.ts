import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporativoComponent } from './corporativo.component';
import { ManterUFComponent } from './manter-uf/manter-uf.component';

const routes: Routes = [
                        { path: '', component: CorporativoComponent },
                        { path: 'uf', component: ManterUFComponent }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporativoRoutingModule { }
