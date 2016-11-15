import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';

@Component({
    selector: 'image-module',
    templateUrl: 'app/image_module/image.module.html',
    styleUrls: ['app/image_module/image.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class ImageModule {
    gridElements:Array<number>;
    imageUrl;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteImageModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    changeImageUrl(module) {
        module.url = this.imageUrl;
    }

    deleteImageUrl(module) {
        module.url = 'public/images/img-default.png';
    }

}
