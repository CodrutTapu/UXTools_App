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

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteTabsModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addTabsItem(module) {
        var length = module.items.length;
        var lastItemId = module.items[length - 1].id;
        var lastId = 0;
        if(lastItemId.length == 5) {
            lastId = parseInt(lastItemId[4]) + 1;
        } else if(lastItemId.length == 6){
            lastId = parseInt(lastItemId[4] + lastItemId[5]) + 1;
        }
        module.items.push(new tabsItem('item' + lastId,'New Tab','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
    }

    deleteTabsItem(module,item) {
        module.items.splice(module.items.indexOf(item), 1);
    }

    updateTabsItemContent(item,module) {
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
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateTabsItemTitle(item,event:any) {
        item.title = event.target.value;
    }

}
