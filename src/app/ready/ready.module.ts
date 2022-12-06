import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadyPageRoutingModule } from './ready-routing.module';

import { readypage } from './ready.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadyPageRoutingModule
  ],
  declarations: [readypage]
})
export class ReadyPageModule {}
