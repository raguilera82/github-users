import { ProxyService } from './proxy.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';


@Injectable()
export class AdapterService {

  constructor(private proxy: ProxyService) { }

  getUsers(): Observable<Array<User>> {
    return this.proxy.getUsers().map(
      response => {
        let objs = response.json();
        let users: Array<User> = [];
        objs.forEach(obj => {
          users.push(new User(obj.login, obj.avatar_url));
        });
        return users;
      }
    );
  }

}
