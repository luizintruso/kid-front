import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'sharing', loadChildren: () => import('./sharing/sharing.module').then(m => m.SharingModule) }, 
                        { path: 'corporativo', loadChildren: () => import('./corporativo/corporativo.module').then(m => m.CorporativoModule) }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
