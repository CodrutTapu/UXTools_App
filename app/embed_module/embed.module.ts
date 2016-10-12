import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
  selector: 'embed-module',
  templateUrl: 'app/embed_module/embed.module.html',
  styleUrls: ['app/embed_module/embed.module.css'],
  inputs: ['gE']
})

export class EmbedModule {
    embedUrl;
    url: SafeResourceUrl;
    constructor(private sanitizer:DomSanitizationService){}
    ngOnInit(){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rn5s6H_Yamo');
    }
    deleteEmbedModule(gE) {
        gE.moduleType = {};
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
