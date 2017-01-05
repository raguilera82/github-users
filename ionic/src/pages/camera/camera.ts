import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera, CameraPopoverOptions } from 'ionic-native';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  urlImg: any;

  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  take() {

    let popoverOptions: CameraPopoverOptions = {x: 300, y: 300, width: 200, height: 200, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    
    Camera.getPicture({
        quality : 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.PNG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            popoverOptions: popoverOptions
    }).then((imageData) => {
      this.error = 'Entro en imageData';
      this.urlImg = "data:image/png;base64," + imageData;
      console.log(this.urlImg);
      this.error = this.urlImg;
    }, (err) => this.error = err);
  }

}