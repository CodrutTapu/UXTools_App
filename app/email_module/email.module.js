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
var EmailModule = (function () {
    function EmailModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    EmailModule.prototype.cloneModule = function (gE) {
        this._cloneModuleService.cloneModule(gE, this.gridElements);
    };
    EmailModule.prototype.deleteEmailModule = function (gE) {
        gE.moduleType = 0;
    };
    EmailModule.prototype.updateEmail = function (gE) {
        gE.moduleType.email = this.email;
    };
    EmailModule.prototype.updateEmailContent = function (gE) {
        $(document).off('click', '.editable-email-content').on('click', '.editable-email-content', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        gE.moduleType.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    return EmailModule;
}());
EmailModule = __decorate([
    core_1.Component({
        selector: 'email-module',
        templateUrl: 'app/email_module/email.module.html',
        styleUrls: ['app/email_module/email.module.css'],
        inputs: ['gE', 'gridElements'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], EmailModule);
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map