import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { accordionItem } from './accordionItem';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'accordion-module',
    templateUrl: 'app/accordion_module/accordion.module.html',
    styleUrls: ['app/accordion_module/accordion.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class AccordionModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    ngOnInit() {
        $('.accordion-module').on('show.bs.collapse','.collapse', function() {
            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    }

    deleteAccordionModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addAccordionItem(module) {
        var length = module.items.length;
        var lastItemId = module.items[length - 1].id;
        var lastId = 0;
        if(lastItemId.length == 5) {
            lastId = parseInt(lastItemId[4]) + 1;
        } else if(lastItemId.length == 6){
            lastId = parseInt(lastItemId[4] + lastItemId[5]) + 1;
        }
        module.items.push(new accordionItem('item' + lastId,'New Item Title','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
    }

    deleteAccordionItem(module,item) {
        module.items.splice(module.items.indexOf(item), 1);
    }

    updateAccordionTitle(module) {
        $(document).off('click','.editable-accordion-title').on('click','.editable-accordion-title',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      module.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateAccordionItemTitle(item,event:any) {
        item.title = event.target.value;
    }

    updateAccordionItemContent(item) {
        $(document).off('click','.editable-accordion-item-content').on('click','.editable-accordion-item-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      item.content = contents;
                    }
                }
            });
        });
    }

}
