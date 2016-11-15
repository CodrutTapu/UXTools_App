import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {tagModuleTag} from './tagModuleTag';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-tag-module',
    templateUrl: 'app/tag_module/view.tag.module.html',
    styleUrls: ['app/tag_module/tag.module.css'],
    inputs: ['gE','module']
})

export class ViewTagModule {}
