import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../sharing/guard/auth.guard';
import { CorporativoComponent } from './corporativo.component';
import { ManterUFComponent } from './manter-uf/manter-uf.component';

const routes: Routes = [
                        { path: '', component: CorporativoComponent , canActivate: [AuthGuard]  },
                        { path: 'uf', component: ManterUFComponent, canActivate: [AuthGuard]  }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporativoRoutingModule { }
