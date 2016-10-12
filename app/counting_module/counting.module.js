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
var CountingModule = (function () {
    function CountingModule() {
    }
    CountingModule.prototype.deleteCountingModule = function (gE) {
        gE.moduleType = {};
    };
    CountingModule.prototype.updateCountingValue = function (gE) {
        $(document).off('click', '.editable-counting-value').on('click', '.editable-counting-value', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        gE.moduleType.content[0] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    CountingModule.prototype.updateCountingDescription = function (gE) {
        $(document).off('click', '.editable-counting-description').on('click', '.editable-counting-description', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        gE.moduleType.content[1] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    CountingModule = __decorate([
        core_1.Component({
            selector: 'counting-module',
            templateUrl: 'app/counting_module/counting.module.html',
            styleUrls: ['app/counting_module/counting.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], CountingModule);
    return CountingModule;
}());
exports.CountingModule = CountingModule;
//# sourceMappingURL=counting.module.js.map