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
var bgColorModule = (function () {
    function bgColorModule() {
        this.bgColors = ['#4c7ba0', '#ffffff', '#ee4039', '#f07171', '#124666', '#737373', '#f8b13d', '#00b5c8', '#81bda4', '#F8F8F8', '#b05574'];
        this.customBgColor = "#FFFFFF";
    }
    bgColorModule.prototype.colorsListToggle = function () {
        $('.colors-list').toggle();
    };
    bgColorModule.prototype.updateBgColor = function (gE) {
        if (this.customBgColor[0] != '#') {
            this.customBgColor = "#" + this.customBgColor;
        }
        ;
        gE.bgColor = this.customBgColor;
    };
    bgColorModule.prototype.selectBgColor = function (gE, bgC) {
        gE.bgColor = bgC;
    };
    bgColorModule = __decorate([
        core_1.Component({
            selector: 'bgColor-module',
            templateUrl: 'app/bgColor_component/bgColor.module.html',
            styleUrls: ['app/bgColor_component/bgColor.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], bgColorModule);
    return bgColorModule;
}());
exports.bgColorModule = bgColorModule;
//# sourceMappingURL=bgColor.module.js.map