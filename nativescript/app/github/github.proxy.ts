import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GithubProxy {

    constructor(private http: Http) {}

    getUsers(): Observable<Response> {
        return this.http.get('https://api.github.com/users');
    }

}