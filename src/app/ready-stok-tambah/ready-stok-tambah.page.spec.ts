import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
 selector: './ready-stok-tambah.page',
 templateUrl: './ready-stok-tambah.page.html',
 styleUrls: ['./ready-stok-tambah.page.scss'],
})
export class readystoktambahpage implements OnInit {
 ID: any;
 Brand: any;
 Nama: any;
 Harga: any;
 constructor(private router: Router, public _apiService: ApiService,) { }
 ngOnInit() {
 }
 addMatakuliah() {
 let data = {
 ID: this.ID,
 Brand: this.Brand,
 Nama: this.Nama,
 Harga: this.Harga
 }
 this._apiService.tambah(data, '/tambah.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.ID = '';
 this.Brand = '';
 this.Nama = '';
 this.Harga = '';
 this._apiService.notif('berhasil input Matakuliah');
 this.router.navigateByUrl('/matakuliah');
 },
 error: (err: any) => {
 this._apiService.notif('gagal input Matakuliah');
 }
 })
 }
}