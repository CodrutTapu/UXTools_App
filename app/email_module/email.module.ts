import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'email-module',
    templateUrl: 'app/email_module/email.module.html',
    styleUrls: ['app/email_module/email.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class EmailModule {
    gridElements:Array<number>;
    email;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteEmailModule(gE) {
        gE.moduleType = 0;
    }

    updateEmail(gE) {
        gE.moduleType.email = this.email;
    }

    updateEmailContent(gE) {
        $(document).off('click','.editable-email-content').on('click','.editable-email-content',function(){
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
