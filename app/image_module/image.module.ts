import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';

@Component({
    selector: 'image-module',
    templateUrl: 'app/image_module/image.module.html',
    styleUrls: ['app/image_module/image.module.css'],
    inputs: ['gE','gridElements'],
    providers: [cloneModuleService]
})

export class ImageModule {
    gridElements:Array<number>;
    imageUrl;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteImageModule(gE) {
        gE.moduleType = 0;
    }

    changeImageUrl(gE) {
        gE.moduleType.url = this.imageUrl;
    }

    deleteImageUrl(gE) {
        gE.moduleType.url = 'public/images/img-default.png';
    }

}
