import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProxyService {

  constructor(private http: Http) { }

  getUsers(): Observable<Response> {
    return this.http.get(environment.url);
  }

}
