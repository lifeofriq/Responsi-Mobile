import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ready',
    loadChildren: () => import('./ready/ready.module').then( m => m.ReadyPageModule)
  },
  {
    path: 'ready-stok-tambah',
    loadChildren: () => import('./ready-stok-tambah/ready-stok-tambah.module').then( m => m.ReadyStokTambahPageModule)
  },
  {
    path: 'ready-stok-edit',
    loadChildren: () => import('./ready-stok-edit/ready-stok-edit.module').then( m => m.ReadyStokEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
