import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';

@Component({
    selector: 'image-module',
    templateUrl: 'app/image_module/image.module.html',
    styleUrls: ['app/image_module/image.module.css'],
    inputs: ['gE']
})

export class ImageModule {
    imageUrl;
    deleteImageModule(gE) {
        gE.moduleType = {};
    }
    changeImageUrl(gE) {
        gE.moduleType.url = this.imageUrl;
    }
    deleteImageUrl(gE) {
        gE.moduleType.url = 'public/images/img-default.png';
    }
}
