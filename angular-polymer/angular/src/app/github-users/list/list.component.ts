import { AdapterService } from './../adapter.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Array<User>;

  constructor(private adapter: AdapterService) { }

  ngOnInit() {
    this.adapter.getUsers().subscribe(
      users => this.users = users
    );
  }

}
