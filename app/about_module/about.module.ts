import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { aboutItem } from './aboutItem';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'about-module',
    templateUrl: 'app/about_module/about.module.html',
    styleUrls: ['app/about_module/about.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class AboutModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteAboutModule(gE) {
        gE.moduleType = 0;
    }

    addAboutItem(gE) {
        gE.moduleType.content.push(new aboutItem('<p>new item name</p>','<p>New item value</p>'));
    }

    deleteAboutItem(gE,item) {
        gE.moduleType.content.splice(gE.moduleType.content.indexOf(item), 1);
    }

    updateAboutItemName(aI,gE) {
        $(document).off('click','.editable-about-item-name').on('click','.editable-about-item-name',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      aI.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }

    updateAboutItemValue(aI,gE) {
        $(document).off('click','.editable-about-item-value').on('click','.editable-about-item-value',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      aI.value = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }

}
