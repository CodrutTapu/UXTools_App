import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-devices-platforms-module',
    templateUrl: 'app/devicesPlatforms_module/view.devices-platforms.module.html',
    styleUrls: ['app/devicesPlatforms_module/devices-platforms.module.css'],
    inputs: ['gE']
})

export class ViewDevicesPlatformsModule {
    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }
}
