import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
declare var $: any;

@Component({
  selector: 'bgColor-module',
  templateUrl: 'app/bgColor_component/bgColor.module.html',
  styleUrls:  ['app/bgColor_component/bgColor.module.css'],
  inputs: ['module']
})

export class bgColorModule {
    bgColors:Array<string> = ['#4c7ba0','#ffffff','#ee4039','#f07171','#124666','#737373','#f8b13d','#00b5c8','#81bda4','#F8F8F8','#b05574'];
    customBgColor = "#FFFFFF";
    colorsListToggle() {
        $('.colors-list').toggle();
    }
    updateBgColor(module) {
        if( this.customBgColor[0] != '#') {
            this.customBgColor = "#" +  this.customBgColor;
        };
        module.bgColor = this.customBgColor;
    }
    selectBgColor(module,bgC) {
        module.bgColor = bgC;
    }
}
