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
var scaleChartModuleScale_1 = require("./scaleChartModuleScale");
var cloneModule_service_1 = require("../cloneModule_service/cloneModule.service");
var ScaleChartModule = (function () {
    function ScaleChartModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    ScaleChartModule.prototype.cloneModule = function (gE) {
        this._cloneModuleService.cloneModule(gE, this.gridElements);
    };
    ScaleChartModule.prototype.deleteScaleChartModule = function (gE) {
        gE.moduleType = 0;
    };
    ScaleChartModule.prototype.updateScaleValue = function (event, scale) {
        scale.value = event.target.value;
    };
    ScaleChartModule.prototype.addScale = function (gE) {
        gE.moduleType.scales.push(new scaleChartModuleScale_1.scaleChartModuleScale('side A', 'side B', 50));
    };
    ScaleChartModule.prototype.deleteScale = function (gE, scale) {
        gE.moduleType.scales.splice(gE.moduleType.scales.indexOf(scale), 1);
    };
    ScaleChartModule.prototype.updateScaleTitle = function (gE) {
        $(document).off('click', '.editable-scale-title').on('click', '.editable-scale-title', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        gE.moduleType.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    ScaleChartModule.prototype.updateScaleSideA = function (scale, gE) {
        $(document).off('click', '.editable-sideA').on('click', '.editable-sideA', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        scale.sideA = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    ScaleChartModule.prototype.updateScaleSideB = function (scale, gE) {
        $(document).off('click', '.editable-sideB').on('click', '.editable-sideB', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        scale.sideB = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    return ScaleChartModule;
}());
ScaleChartModule = __decorate([
    core_1.Component({
        selector: 'scale-chart-module',
        templateUrl: 'app/scale_chart_module/scale-chart.module.html',
        styleUrls: ['app/scale_chart_module/scale-chart.module.css'],
        inputs: ['gE', 'gridElements', 'module'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], ScaleChartModule);
exports.ScaleChartModule = ScaleChartModule;
//# sourceMappingURL=scale-chart.module.js.map