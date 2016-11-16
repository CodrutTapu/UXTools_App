import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { tagModuleTag } from './tagModuleTag';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'tag-module',
    templateUrl: 'app/tag_module/tag.module.html',
    styleUrls: ['app/tag_module/tag.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class TagModule {
    i:number = 4;
    bgColors:Array<string> = ['#4c7ba0','#ffffff','#ee4039','#f07171','#124666','#737373','#f8b13d','#00b5c8','#E3E5E6','#b05574'];
    customTagBgColor = '#E3E5E6';
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteTagModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    addTag(module) {
        module.tags.push(new tagModuleTag(this.i,'<p>New Tag</p>','#e3e5e6'));
        this.i += 1;
    }

    deleteTag(module,tag) {
        module.tags.splice(module.tags.indexOf(tag), 1);
    }

    updateTag(tag) {
        $(document).off('click','.editable-tag').on('click','.editable-tag',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      tag.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',tag.color);
        });
    }

    tagBgColorToggle(tag) {
        var tagId = tag.id;
        $('.tag-bg-colors-list-' + tagId).toggle();
    }

    updateTagBgColor(tag) {
        if( this.customTagBgColor[0] != '#') {
            this.customTagBgColor = "#" +  this.customTagBgColor;
        };
        tag.color= this.customTagBgColor;
    }

    selectTagBgColor(tag,bgC) {
        tag.color = bgC;
    }

}
