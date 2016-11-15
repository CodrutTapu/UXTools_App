import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { SafeResourceUrl, DomSanitizer  } from '@angular/platform-browser';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'embed-module',
    templateUrl: 'app/embed_module/embed.module.html',
    styleUrls: ['app/embed_module/embed.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class EmbedModule {
    gE;
    embedUrl;
    url: SafeResourceUrl;
    gridElements:Array<number>;

    constructor(private sanitizer:DomSanitizer, private _cloneModuleService: cloneModuleService ){}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    ngOnInit(){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.gE.moduleType.content);
    }

    deleteEmbedModule(gE) {
        gE.moduleType = 0;
    }

    changeEmbedUrl(gE) {
        gE.moduleType.content = this.embedUrl;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(gE.moduleType.content);
    }

    updateEmbedTitle(gE) {
        $(document).off('click','.editable-embed-title').on('click','.editable-embed-title',function(){
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

}
