import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { SafeResourceUrl, DomSanitizer  } from '@angular/platform-browser';
import { bgColorModule } from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'view-embed-module',
    templateUrl: 'app/embed_module/view.embed.module.html',
    styleUrls: ['app/embed_module/embed.module.css'],
    inputs: ['gE']
})

export class ViewEmbedModule {
    gE;
    embedUrl;
    url: SafeResourceUrl;
    constructor(private sanitizer:DomSanitizer ){}
    ngOnInit(){
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.gE.moduleType.content);
    }
}
