import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'devices-platforms-module',
    templateUrl: 'app/devicesPlatforms_module/devices-platforms.module.html',
    styleUrls: ['app/devicesPlatforms_module/devices-platforms.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class DevicesPlatformsModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }

    deleteDevicesPlatformsModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    switchDevicePlatformItemStatus(dp) {
        dp.status = !dp.status;
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }

}
