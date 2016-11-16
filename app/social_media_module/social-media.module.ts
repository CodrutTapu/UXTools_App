import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';

@Component({
    selector: 'social-media-module',
    templateUrl: 'app/social_media_module/social-media.module.html',
    styleUrls: ['app/social_media_module/social-media.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class SocialMediaModule {
    module;
    facebookUrl;
    twitterUrl;
    linkedinUrl;
    externalUrl;
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteSocialMediaModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    updateSocialLinks(module) {
        module.facebookUrl = this.facebookUrl;
        module.twitterUrl = this.twitterUrl;
        module.linkedinUrl = this.linkedinUrl;
        module.externalUrl = this.externalUrl;
    }

    ngOnInit() {
        this.facebookUrl = this.module.facebookUrl;
        this.twitterUrl = this.module.twitterUrl;
        this.linkedinUrl = this.module.linkedinUrl;
        this.externalUrl = this.module.externalUrl;
    }

}
