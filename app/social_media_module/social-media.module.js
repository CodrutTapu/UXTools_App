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
var core_1 = require("@angular/core");
var cloneModule_service_1 = require("../cloneModule_service/cloneModule.service");
var SocialMediaModule = (function () {
    function SocialMediaModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    SocialMediaModule.prototype.cloneModule = function (gE) {
        this._cloneModuleService.cloneModule(gE, this.gridElements);
    };
    SocialMediaModule.prototype.deleteSocialMediaModule = function (gE) {
        gE.moduleType = 0;
    };
    SocialMediaModule.prototype.updateSocialLinks = function (gE) {
        gE.moduleType.facebookUrl = this.facebookUrl;
        gE.moduleType.twitterUrl = this.twitterUrl;
        gE.moduleType.linkedinUrl = this.linkedinUrl;
        gE.moduleType.externalUrl = this.externalUrl;
    };
    SocialMediaModule.prototype.ngOnInit = function () {
        this.facebookUrl = this.gE.moduleType.facebookUrl;
        this.twitterUrl = this.gE.moduleType.twitterUrl;
        this.linkedinUrl = this.gE.moduleType.linkedinUrl;
        this.externalUrl = this.gE.moduleType.externalUrl;
    };
    return SocialMediaModule;
}());
SocialMediaModule = __decorate([
    core_1.Component({
        selector: 'social-media-module',
        templateUrl: 'app/social_media_module/social-media.module.html',
        styleUrls: ['app/social_media_module/social-media.module.css'],
        inputs: ['gE', 'gridElements'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], SocialMediaModule);
exports.SocialMediaModule = SocialMediaModule;
//# sourceMappingURL=social-media.module.js.map