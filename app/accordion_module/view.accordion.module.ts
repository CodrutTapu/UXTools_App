import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {accordionItem} from './accordionItem';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-accordion-module',
    templateUrl: 'app/accordion_module/view-accordion.module.html',
    styleUrls: ['app/accordion_module/accordion.module.css'],
    inputs: ['gE']
})

export class ViewAccordionModule {
    ngOnInit() {
        $('.accordion-module').on('show.bs.collapse','.collapse', function() {
            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    }
}
