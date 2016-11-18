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
    module;
    embedUrl;
    url: SafeResourceUrl;
    gridElements:Array<number>;

    constructor(private sanitizer:DomSanitizer, private _cloneModuleService: cloneModuleService ){}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    ngOnInit(){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.module.content);
    }

    deleteEmbedModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    changeEmbedUrl(module) {
        module.content = this.embedUrl;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(module.content);
    }

    updateEmbedTitle(module) {
        $(document).off('click','.editable-embed-title').on('click','.editable-embed-title',function(){
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
        });
    }

}
