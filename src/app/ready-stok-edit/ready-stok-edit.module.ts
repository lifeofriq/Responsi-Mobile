import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadyStokEditPageRoutingModule } from './ready-stok-edit-routing.module';

import { ReadyStokEditPage } from './ready-stok-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadyStokEditPageRoutingModule
  ],
  declarations: [ReadyStokEditPage]
})
export class ReadyStokEditPageModule {}
