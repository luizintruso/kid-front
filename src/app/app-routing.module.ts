import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './sharing/guard/auth.guard';

const routes: Routes = [{ path: 'sharing', loadChildren: () => import('./sharing/sharing.module').then(m => m.SharingModule), canActivate: [AuthGuard] }, 
                        { path: 'corporativo', loadChildren: () => import('./corporativo/corporativo.module').then(m => m.CorporativoModule), canActivate: [AuthGuard] }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
