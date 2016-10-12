import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';

@Component({
    selector: 'social-media-module',
    templateUrl: 'app/social_media_module/social-media.module.html',
    styleUrls: ['app/social_media_module/social-media.module.css'],
    inputs: ['gE']
})

export class SocialMediaModule {
    facebookUrl;
    twitterUrl;
    linkedinUrl;
    externalUrl;
    deleteSocialMediaModule(gE) {
        gE.moduleType = {};
    }
    updateSocialLinks(gE) {
        gE.moduleType.facebookUrl = this.facebookUrl;
        gE.moduleType.twitterUrl = this.twitterUrl;
        gE.moduleType.linkedinUrl = this.linkedinUrl;
        gE.moduleType.externalUrl = this.externalUrl;
    }
}
