import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';

@Component({
    selector: 'social-media-module',
    templateUrl: 'app/social_media_module/social-media.module.html',
    styleUrls: ['app/social_media_module/social-media.module.css'],
    inputs: ['gE','gridElements'],
    providers: [cloneModuleService]
})

export class SocialMediaModule {
    gE;
    facebookUrl;
    twitterUrl;
    linkedinUrl;
    externalUrl;
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteSocialMediaModule(gE) {
        gE.moduleType = 0;
    }

    updateSocialLinks(gE) {
        gE.moduleType.facebookUrl = this.facebookUrl;
        gE.moduleType.twitterUrl = this.twitterUrl;
        gE.moduleType.linkedinUrl = this.linkedinUrl;
        gE.moduleType.externalUrl = this.externalUrl;
    }

    ngOnInit() {
        this.facebookUrl = this.gE.moduleType.facebookUrl;
        this.twitterUrl = this.gE.moduleType.twitterUrl;
        this.linkedinUrl = this.gE.moduleType.linkedinUrl;
        this.externalUrl = this.gE.moduleType.externalUrl;
    }

}
