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
var tabsItem_1 = require("./tabsItem");
var cloneModule_service_1 = require("../cloneModule_service/cloneModule.service");
var TabsModule = (function () {
    function TabsModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    TabsModule.prototype.cloneModule = function (gE, module) {
        this._cloneModuleService.cloneModule(gE, module);
    };
    TabsModule.prototype.deleteTabsModule = function (gE, module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    };
    TabsModule.prototype.addTabsItem = function (module) {
        var length = module.items.length;
        var lastItemId = module.items[length - 1].id;
        var lastId = 0;
        if (lastItemId.length == 5) {
            lastId = parseInt(lastItemId[4]) + 1;
        }
        else if (lastItemId.length == 6) {
            lastId = parseInt(lastItemId[4] + lastItemId[5]) + 1;
        }
        module.items.push(new tabsItem_1.tabsItem('item' + lastId, 'New Tab', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
    };
    TabsModule.prototype.deleteTabsItem = function (module, item) {
        module.items.splice(module.items.indexOf(item), 1);
    };
    TabsModule.prototype.updateTabsItemContent = function (item, module) {
        $(document).off('click', '.editable-tabs-item-content').on('click', '.editable-tabs-item-content', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['fontname', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        item.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', module.bgColor);
        });
    };
    TabsModule.prototype.updateTabsItemTitle = function (item, event) {
        item.title = event.target.value;
    };
    return TabsModule;
}());
TabsModule = __decorate([
    core_1.Component({
        selector: 'tabs-module',
        templateUrl: 'app/tabs_module/tabs.module.html',
        styleUrls: ['app/tabs_module/tabs.module.css'],
        inputs: ['gE', 'gridElements', 'module'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], TabsModule);
exports.TabsModule = TabsModule;
//# sourceMappingURL=tabs.module.js.map