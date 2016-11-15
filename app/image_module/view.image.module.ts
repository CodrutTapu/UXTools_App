import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';

@Component({
    selector: 'view-image-module',
    templateUrl: 'app/image_module/view-image.module.html',
    styleUrls: ['app/image_module/image.module.css'],
    inputs: ['gE','module']
})

export class ViewImageModule {
    imageUrl;
}
