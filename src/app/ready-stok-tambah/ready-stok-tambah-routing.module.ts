import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyStokTambahPage } from './ready-stok-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: ReadyStokTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadyStokTambahPageRoutingModule {}
