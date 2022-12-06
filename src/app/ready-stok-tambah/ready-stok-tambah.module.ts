import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadyStokTambahPageRoutingModule } from './ready-stok-tambah-routing.module';

import { ReadyStokTambahPage } from './ready-stok-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadyStokTambahPageRoutingModule
  ],
  declarations: [ReadyStokTambahPage]
})
export class ReadyStokTambahPageModule {}
