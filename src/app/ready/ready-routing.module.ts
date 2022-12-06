import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { readypage } from './ready.page';

const routes: Routes = [
  {
    path: '',
    component: readypage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadyPageRoutingModule {}
