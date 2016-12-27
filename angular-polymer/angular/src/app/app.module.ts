import { ListComponent } from './github-users/list/list.component';
import { GithubUsersModule } from './github-users/github-users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }