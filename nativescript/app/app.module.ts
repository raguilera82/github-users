import { GithubProxy } from './github/github.proxy';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptHttpModule],
    providers: [GithubProxy],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
