import { GithubProxy } from './github/github.proxy';
import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
   /* public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }*/

    users: any[]


    constructor(private github: GithubProxy) {
        this.getUsers();
    }

    getUsers(): void {
        this.github.getUsers().subscribe(
            (response) => {
                console.log(response.json());
                this.users = response.json();
                this.users.forEach(element => {
                    console.log(element.avatar_url);
                });
            } 
        )
    }

}
