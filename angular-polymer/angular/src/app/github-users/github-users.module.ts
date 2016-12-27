import { AdapterService } from './adapter.service';
import { ProxyService } from './proxy.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  providers: [ProxyService, AdapterService],
  exports: [ListComponent],
  declarations: [ListComponent]
})
export class GithubUsersModule { }
