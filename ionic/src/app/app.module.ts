import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { GithubModule } from '@raguilera82/angular-github-library'
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c516c8a3'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CameraPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    GithubModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CameraPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
