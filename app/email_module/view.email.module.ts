import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-email-module',
    templateUrl: 'app/email_module/view-email.module.html',
    styleUrls: ['app/email_module/email.module.css'],
    inputs: ['gE']
})

export class ViewEmailModule {}
