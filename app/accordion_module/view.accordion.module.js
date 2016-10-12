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
var ViewAccordionModule = (function () {
    function ViewAccordionModule() {
    }
    ViewAccordionModule.prototype.ngOnInit = function () {
        $('.accordion-module').on('show.bs.collapse', '.collapse', function () {
            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    };
    ViewAccordionModule = __decorate([
        core_1.Component({
            selector: 'view-accordion-module',
            templateUrl: 'app/accordion_module/view-accordion.module.html',
            styleUrls: ['app/accordion_module/accordion.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], ViewAccordionModule);
    return ViewAccordionModule;
}());
exports.ViewAccordionModule = ViewAccordionModule;
//# sourceMappingURL=view.accordion.module.js.map