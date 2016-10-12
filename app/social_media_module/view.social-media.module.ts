import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';

@Component({
    selector: 'view-social-media-module',
    templateUrl: 'app/social_media_module/view.social-media.module.html',
    styleUrls: ['app/social_media_module/social-media.module.css'],
    inputs: ['gE']
})

export class ViewSocialMediaModule {
    facebookUrl;
    twitterUrl;
    linkedinUrl;
    externalUrl;
}
