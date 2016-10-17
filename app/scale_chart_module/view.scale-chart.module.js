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
var ViewScaleChartModule = (function () {
    function ViewScaleChartModule() {
    }
    ViewScaleChartModule.prototype.ngOnInit = function () {
        $("<style type='text/css'>.scale-chart-module input[type=range]::-webkit-slider-thumb{background:" + this.gE.csColor + "!important}</style>").appendTo($("head"));
    };
    return ViewScaleChartModule;
}());
ViewScaleChartModule = __decorate([
    core_1.Component({
        selector: 'view-scale-chart-module',
        templateUrl: 'app/scale_chart_module/view-scale-chart.module.html',
        styleUrls: ['app/scale_chart_module/scale-chart.module.css'],
        inputs: ['gE']
    }),
    __metadata("design:paramtypes", [])
], ViewScaleChartModule);
exports.ViewScaleChartModule = ViewScaleChartModule;
//# sourceMappingURL=view.scale-chart.module.js.map