import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'text-module',
    templateUrl: 'app/text_module/text.module.html',
    styleUrls:  ['app/text_module/text.module.css'],
    inputs: ['gE']
})

export class TextModule {
    deleteTextModule(gE) {
        gE.moduleType = {};
    }
    updateTextModule(gE) {
        $(document).off('click','.editable-text-content').on('click','.editable-text-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
}
