import { ProxyService } from '@raguilera82/angular-github-library';
import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { Deploy } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  updateMsg: string;

  users: any[];

  isMobile: any;

  constructor(public navCtrl: NavController, private github:ProxyService, private deploy: Deploy, private platform: Platform) {}

  ngOnInit() {
    this.isMobile = this.platform.is('mobile')
    console.log(this.isMobile);
    this.getUsers();
  }

  update() {
    this.deploy.check().then(
      (snapshotAvailable: boolean) => {
        if (snapshotAvailable) {
          this.updateMsg = 'Hay una actualización ';
          this.deploy.download().then(() => {
              this.updateMsg = 'Se ha aplicado la nueva actualización ';
              return this.deploy.extract().then(() => {
                this.deploy.load();
                console.log('La aplicación se ha actualizado');
              });
            });
        }
      }
    )
  }

  getUsers(): void {
    this.github.getUsers().subscribe(
      response => {
        console.log(response.json());
        this.users = response.json();
      }
    )
  }

}
