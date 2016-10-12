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
var tabsItem_1 = require('./tabsItem');
var TabsModule = (function () {
    function TabsModule() {
        this.i = 4;
    }
    TabsModule.prototype.deleteTabsModule = function (gE) {
        gE.moduleType = {};
    };
    TabsModule.prototype.addTabsItem = function (gE) {
        gE.moduleType.items.push(new tabsItem_1.tabsItem('item' + this.i, '<p>New Tab</p>', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
        this.i++;
    };
    TabsModule.prototype.deleteTabsItem = function (gE, item) {
        gE.moduleType.items.splice(gE.moduleType.items.indexOf(item), 1);
    };
    TabsModule.prototype.updateTabsItemContent = function (item, gE) {
        $(document).off('click', '.editable-tabs-item-content').on('click', '.editable-tabs-item-content', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        item.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    TabsModule.prototype.updateTabsItemTitle = function (item, gE) {
        $(document).off('click', '.editable-tabs-item-title').on('click', '.editable-tabs-item-title', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        item.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    TabsModule = __decorate([
        core_1.Component({
            selector: 'tabs-module',
            templateUrl: 'app/tabs_module/tabs.module.html',
            styleUrls: ['app/tabs_module/tabs.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=tabs.module.js.map