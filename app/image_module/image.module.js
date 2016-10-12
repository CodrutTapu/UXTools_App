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
var ImageModule = (function () {
    function ImageModule() {
    }
    ImageModule.prototype.deleteImageModule = function (gE) {
        gE.moduleType = {};
    };
    ImageModule.prototype.changeImageUrl = function (gE) {
        gE.moduleType.url = this.imageUrl;
    };
    ImageModule.prototype.deleteImageUrl = function (gE) {
        gE.moduleType.url = 'public/images/img-default.png';
    };
    ImageModule = __decorate([
        core_1.Component({
            selector: 'image-module',
            templateUrl: 'app/image_module/image.module.html',
            styleUrls: ['app/image_module/image.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], ImageModule);
    return ImageModule;
}());
exports.ImageModule = ImageModule;
//# sourceMappingURL=image.module.js.map