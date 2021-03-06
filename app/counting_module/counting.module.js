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
var CountingModule = (function () {
    function CountingModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    CountingModule.prototype.cloneModule = function (gE, module) {
        this._cloneModuleService.cloneModule(gE, module);
    };
    CountingModule.prototype.deleteCountingModule = function (gE, module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    };
    CountingModule.prototype.updateCountingValue = function (module) {
        $(document).off('click', '.editable-counting-value').on('click', '.editable-counting-value', function () {
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        module.content[0] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', module.bgColor);
        });
    };
    CountingModule.prototype.updateCountingDescription = function (module) {
        $(document).off('click', '.editable-counting-description').on('click', '.editable-counting-description', function () {
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        module.content[1] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', module.bgColor);
        });
    };
    return CountingModule;
}());
CountingModule = __decorate([
    core_1.Component({
        selector: 'counting-module',
        templateUrl: 'app/counting_module/counting.module.html',
        styleUrls: ['app/counting_module/counting.module.css'],
        inputs: ['gE', 'gridElements', 'module'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], CountingModule);
exports.CountingModule = CountingModule;
//# sourceMappingURL=counting.module.js.map