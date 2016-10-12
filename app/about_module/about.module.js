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
var aboutItem_1 = require('./aboutItem');
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule.prototype.deleteAboutModule = function (gE) {
        gE.moduleType = {};
    };
    AboutModule.prototype.addAboutItem = function (gE) {
        gE.moduleType.content.push(new aboutItem_1.aboutItem('<p>new item name</p>', '<p>New item value</p>'));
    };
    AboutModule.prototype.deleteAboutItem = function (gE, item) {
        gE.moduleType.content.splice(gE.moduleType.content.indexOf(item), 1);
    };
    AboutModule.prototype.updateAboutItemName = function (aI, gE) {
        $(document).off('click', '.editable-about-item-name').on('click', '.editable-about-item-name', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        aI.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    AboutModule.prototype.updateAboutItemValue = function (aI, gE) {
        $(document).off('click', '.editable-about-item-value').on('click', '.editable-about-item-value', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        aI.value = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    AboutModule = __decorate([
        core_1.Component({
            selector: 'about-module',
            templateUrl: 'app/about_module/about.module.html',
            styleUrls: ['app/about_module/about.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map