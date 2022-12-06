import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-ready-stok-edit',
  templateUrl: './ready-stok-edit.page.html',
  styleUrls: ['./ready-stok-edit.page.scss'],
})
export class stokedit implements OnInit {
 ID: any;
 Brand: any;
 Nama: any;
 Harga: any;
 constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
 ) {
 this.route.params.subscribe((param: any) => {
 this.ID = param.ID;
 console.log(this.ID);
 this.stokedit(this.ID);
 })
 }
 ngOnInit() {
 }
 stokedit(id: any) {
 this._apiService.lihat(id, '/lihat.php?id=').subscribe({
 next: (hasil: any) => {
 console.log('sukses', hasil);
 let stokready = hasil;
 this.Brand = stokedit.Brand
 this.Nama = stokedit.Nama;
 this.Harga = stokedit.Harga;
 },
 error: (error: any) => {
 this._apiService.notif('gagal ambil data');
 }
 })
 }
 editStok() {
 let data = {
 ID: this.ID,
 Brand: this.Brand,
 Nama: this.Nama
 Harga: this.Harga
 }
 this._apiService.edit(data, '/edit.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.ID = '';
 this.Brand = '';
 this.Nama = '';
 this.Harga = '';
 this._apiService.notif('berhasil edit Stok');
 this.router.navigateByUrl('/readystok');
 },
 error: (err: any) => {
 this._apiService.notif('gagal edit Stok');
 }
 })
 }
}