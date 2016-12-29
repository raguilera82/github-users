import { Github } from './../../providers/github';
import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  users: any[];

  constructor(public navCtrl: NavController, private github:Github) {
    
  }

  ngOnInit() {
    this.getUsers();
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
