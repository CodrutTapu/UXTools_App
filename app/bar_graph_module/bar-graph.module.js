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
var barGraphBar_1 = require("./barGraphBar");
var cloneModule_service_1 = require("../cloneModule_service/cloneModule.service");
var BarGraphModule = (function () {
    function BarGraphModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    BarGraphModule.prototype.cloneModule = function (gE) {
        this._cloneModuleService.cloneModule(gE, this.gridElements);
    };
    BarGraphModule.prototype.deleteBarGraphModule = function (gE) {
        gE.moduleType = 0;
    };
    BarGraphModule.prototype.addBarGraph = function (gE) {
        gE.moduleType.bars.push(new barGraphBar_1.barGraphBar(50, '<p>New Label</p>'));
    };
    BarGraphModule.prototype.deleteBar = function (gE, bar) {
        gE.moduleType.bars.splice(gE.moduleType.bars.indexOf(bar), 1);
    };
    BarGraphModule.prototype.adjustBarLength = function (event, bar) {
        var pBLength = $('.progress').width();
        bar.value = Math.ceil((event.layerX * 100) / pBLength);
    };
    BarGraphModule.prototype.updateBarGraphTitle = function (gE) {
        $(document).off('click', '.editable-barGrpah-title').on('click', '.editable-barGrpah-title', function () {
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
    BarGraphModule.prototype.updateBarLabel = function (bar, gE) {
        $(document).off('click', '.editable-bar-label').on('click', '.editable-bar-label', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        bar.label = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    return BarGraphModule;
}());
BarGraphModule = __decorate([
    core_1.Component({
        selector: 'bar-graph-module',
        templateUrl: 'app/bar_graph_module/bar-graph.module.html',
        styleUrls: ['app/bar_graph_module/bar-graph.module.css'],
        inputs: ['gE', 'gridElements'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], BarGraphModule);
exports.BarGraphModule = BarGraphModule;
//# sourceMappingURL=bar-graph.module.js.map