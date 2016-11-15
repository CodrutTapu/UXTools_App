import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;
declare var toastr:any;

@Component({
    selector: 'text-module',
    templateUrl: 'app/text_module/text.module.html',
    styleUrls:  ['app/text_module/text.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class TextModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteTextModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    updateTextModule(module) {
        $(document).off('click','.editable-text-content').on('click','.editable-text-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      module.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

}
