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
var platform_browser_1 = require('@angular/platform-browser');
var EmbedModule = (function () {
    function EmbedModule(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EmbedModule.prototype.ngOnInit = function () {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rn5s6H_Yamo');
    };
    EmbedModule.prototype.deleteEmbedModule = function (gE) {
        gE.moduleType = {};
    };
    EmbedModule.prototype.changeEmbedUrl = function (gE) {
        gE.moduleType.content = this.embedUrl;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(gE.moduleType.content);
    };
    EmbedModule.prototype.updateEmbedTitle = function (gE) {
        $(document).off('click', '.editable-embed-title').on('click', '.editable-embed-title', function () {
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
    EmbedModule = __decorate([
        core_1.Component({
            selector: 'embed-module',
            templateUrl: 'app/embed_module/embed.module.html',
            styleUrls: ['app/embed_module/embed.module.css'],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizationService !== 'undefined' && platform_browser_1.DomSanitizationService) === 'function' && _a) || Object])
    ], EmbedModule);
    return EmbedModule;
    var _a;
}());
exports.EmbedModule = EmbedModule;
//# sourceMappingURL=embed.module.js.map