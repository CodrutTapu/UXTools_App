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
var accordionItem_1 = require("./accordionItem");
var cloneModule_service_1 = require("../cloneModule_service/cloneModule.service");
var AccordionModule = (function () {
    function AccordionModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    AccordionModule.prototype.cloneModule = function (gE, module) {
        this._cloneModuleService.cloneModule(gE, module);
    };
    AccordionModule.prototype.ngOnInit = function () {
        $('.accordion-module').on('show.bs.collapse', '.collapse', function () {
            $(this).parents().eq(2).find('.collapse.in').collapse('hide');
        });
    };
    AccordionModule.prototype.deleteAccordionModule = function (gE, module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    };
    AccordionModule.prototype.addAccordionItem = function (module) {
        var length = module.items.length;
        var lastItemId = module.items[length - 1].id;
        var lastId = 0;
        if (lastItemId.length == 5) {
            lastId = parseInt(lastItemId[4]) + 1;
        }
        else if (lastItemId.length == 6) {
            lastId = parseInt(lastItemId[4] + lastItemId[5]) + 1;
        }
        module.items.push(new accordionItem_1.accordionItem('item' + lastId, 'New Item Title', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
    };
    AccordionModule.prototype.deleteAccordionItem = function (module, item) {
        module.items.splice(module.items.indexOf(item), 1);
    };
    AccordionModule.prototype.updateAccordionTitle = function (module) {
        $(document).off('click', '.editable-accordion-title').on('click', '.editable-accordion-title', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        module.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', module.bgColor);
        });
    };
    AccordionModule.prototype.updateAccordionItemTitle = function (item, event) {
        item.title = event.target.value;
    };
    AccordionModule.prototype.updateAccordionItemContent = function (item) {
        $(document).off('click', '.editable-accordion-item-content').on('click', '.editable-accordion-item-content', function () {
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
        });
    };
    return AccordionModule;
}());
AccordionModule = __decorate([
    core_1.Component({
        selector: 'accordion-module',
        templateUrl: 'app/accordion_module/accordion.module.html',
        styleUrls: ['app/accordion_module/accordion.module.css'],
        inputs: ['gE', 'gridElements', 'module'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], AccordionModule);
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=accordion.module.js.map