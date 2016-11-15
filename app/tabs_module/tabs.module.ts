import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {tabsItem} from './tabsItem';
import {bgColorModule} from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'tabs-module',
    templateUrl: 'app/tabs_module/tabs.module.html',
    styleUrls: ['app/tabs_module/tabs.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class TabsModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteTabsModule(gE) {
        gE.moduleType = 0;
    }

    addTabsItem(gE) {
        var length = gE.moduleType.items.length;
        var lastItemId = gE.moduleType.items[length - 1].id;
        var lastId = 0;
        if(lastItemId.length == 5) {
            lastId = parseInt(lastItemId[4]) + 1;
        } else if(lastItemId.length == 6){
            lastId = parseInt(lastItemId[4] + lastItemId[5]) + 1;
        }
        gE.moduleType.items.push(new tabsItem('item' + lastId,'New Tab','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
    }

    deleteTabsItem(gE,item) {
        gE.moduleType.items.splice(gE.moduleType.items.indexOf(item), 1);
    }

    updateTabsItemContent(item,gE) {
        $(document).off('click','.editable-tabs-item-content').on('click','.editable-tabs-item-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['fontname', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      item.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }

    updateTabsItemTitle(item,gE,event:any) {
        item.title = event.target.value;
    }

}
