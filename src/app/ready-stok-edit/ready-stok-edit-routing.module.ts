import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadyStokEditPage } from './ready-stok-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReadyStokEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadyStokEditPageRoutingModule {}
