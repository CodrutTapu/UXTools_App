import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'devices-platforms-module',
    templateUrl: 'app/devicesPlatforms_module/devices-platforms.module.html',
    styleUrls: ['app/devicesPlatforms_module/devices-platforms.module.css'],
    inputs: ['gE']
})

export class DevicesPlatformsModule {
    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }
    deleteDevicesPlatformsModule(option) {
        option.status = {};
    }
    switchDevicePlatformItemStatus(dp) {
        dp.status = !dp.status;
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }
}
