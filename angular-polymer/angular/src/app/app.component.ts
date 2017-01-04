import { ProxyService } from '@raguilera82/angular-github-library';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private proxy:ProxyService) {}

  ngOnInit() {
    this.proxy.getUsers().subscribe((response) => {
      console.log(response.json()[0].login)
    })
  }

}
