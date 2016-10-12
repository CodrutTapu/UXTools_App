"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SocialMediaModule = (function () {
    function SocialMediaModule() {
    }
    SocialMediaModule.prototype.deleteSocialMediaModule = function (gE) {
        gE.moduleType = {};
    };
    SocialMediaModule.prototype.updateSocialLinks = function (gE) {
        gE.moduleType.facebookUrl = this.facebookUrl;
        gE.moduleType.twitterUrl = this.twitterUrl;
        gE.moduleType.linkedinUrl = this.linkedinUrl;
        gE.moduleType.externalUrl = this.externalUrl;
    };
    SocialMediaModule = __decorate([
        core_1.Component({
            selector: 'social-media-module',
            templateUrl: 'app/social_media_module/social-media.module.html',
            styleUrls: ['app/social_media_module/social-media.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], SocialMediaModule);
    return SocialMediaModule;
}());
exports.SocialMediaModule = SocialMediaModule;
//# sourceMappingURL=social-media.module.js.map