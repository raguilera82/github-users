import { Github } from './../../providers/github';
import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Deploy } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  updateMsg: string;

  users: any[];

  constructor(public navCtrl: NavController, private github:Github, private deploy: Deploy) {
    
  }

  ngOnInit() {
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
