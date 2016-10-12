import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {accordionItem} from './accordionItem';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'accordion-module',
    templateUrl: 'app/accordion_module/accordion.module.html',
    styleUrls: ['app/accordion_module/accordion.module.css'],
    inputs: ['gE']
})

export class AccordionModule {
    i:number = 4;
    deleteAccordionModule(gE) {
        gE.moduleType = {};
    }
    addAccordionItem(gE) {
        gE.moduleType.items.push(new accordionItem('item' + this.i,'<p>New Item</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
        this.i++;
    }
    deleteAccordionItem(gE,item) {
        gE.moduleType.items.splice(gE.moduleType.items.indexOf(item), 1);
    }
    updateAccordionTitle(gE) {
        $(document).off('click','.editable-accordion-title').on('click','.editable-accordion-title',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
    updateAccordionItemTitle(item) {
        $(document).off('click','.editable-accordion-item-title').on('click','.editable-accordion-item-title',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      item.title = contents;
                    }
                }
            });
        });
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
    ngOnInit() {
        $('.accordion-module').on('show.bs.collapse','.collapse', function() {

            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    }
}
