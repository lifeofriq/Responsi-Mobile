import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-ready',
  templateUrl: './ready.page.html',
  styleUrls: ['./ready.page.scss'],
})
export class readypage {
  page = 0;
  perPage = 10;
  ready: any[] = [];
  lists: any[] = [];
  constructor(public _apiService: ApiService, private alertController: AlertController,) { }
  ionViewDidEnter() {
  console.log('jika selesai loading');
  this.page = 0;
  this.perPage = 10;
  this.getready();
  }
  paginateArray() {
  this.page++;
  return this.ready.filter(
  x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
  );
  }
  getready() {
  this._apiService.tampil('tampilready.php').subscribe({
  next: (res: any) => {
  console.log('sukses', res);
  this.ready = res;
  this.lists = this.paginateArray();
  },
  error: (err: any) => {
  console.log(err);
  },
  })
  }
  doRefresh(event: any) {
  console.log('Mulai Refresh Konten');
  setTimeout(() => {
  console.log('Selesai Refresh Konten');
  event.target.complete();
  this.page = 0;
  this.perPage = 10;
  this.getready();
  }, 2000);
  }
  loadMore(event: any) {
  console.log(event);
  setTimeout(() => {
  const array = this.paginateArray();
  console.log('new data: ', array);
  this.lists = this.lists.concat(array);
  console.log('list data: ', this.lists);
  event.target.complete();
  if (array?.length < this.perPage) {
  event.target.disabled = true;
  };
  }, 1000);
  }
  deleteready(id: any) {
  this.alertController.create({
  header: 'perhatian',
  subHeader: 'Yakin menghapus data ini?',
  buttons: [
  {
  text: 'Batal',
  handler: (data: any) => {
  console.log('dibatalkan', data);
  }
  },
  {
  text: 'Yakin',
  handler: (data: any) => {
  //jika tekan yakin
  this._apiService.hapus(id, '/hapusready.php?id=').subscribe({
  next: (res: any) => {
  console.log('sukses', res);
  this.page = 0;
  this.perPage = 10;
  this.getready();
  },
  error: (error: any) => {
  this._apiService.notif('gagal');
  }
  })
  }
  }
  ]
  }).then(res => {
  res.present();
  })
  }
 }
 
