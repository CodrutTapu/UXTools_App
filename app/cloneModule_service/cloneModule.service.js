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
require("rxjs/add/operator/map");
var textModule_1 = require("../text_module/textModule");
var imageModule_1 = require("../image_module/imageModule");
var barGraphModule_1 = require("../bar_graph_module/barGraphModule");
var barGraphBar_1 = require("../bar_graph_module/barGraphBar");
var socialMediaModule_1 = require("../social_media_module/socialMediaModule");
var tagModule_1 = require("../tag_module/tagModule");
var tagModuleTag_1 = require("../tag_module/tagModuleTag");
var emailModule_1 = require("../email_module/emailModule");
var scaleChartModule_1 = require("../scale_chart_module/scaleChartModule");
var pieChartModule_1 = require("../pie_chart_module/pieChartModule");
var accordionModule_1 = require("../accordion_module/accordionModule");
var tabsModule_1 = require("../tabs_module/tabsModule");
var embedModule_1 = require("../embed_module/embedModule");
var devicesPlatformsModule_1 = require("../devicesPlatforms_module/devicesPlatformsModule");
var aboutModule_1 = require("../about_module/aboutModule");
var countingModule_1 = require("../counting_module/countingModule");
var cloneModuleService = (function () {
    function cloneModuleService() {
    }
    cloneModuleService.prototype.cloneModule = function (gE, module) {
        var i;
        switch (module.id) {
            case 1:
                gE.modules.push(new textModule_1.textModule(1, 'text-module', module.content, module.bgColor));
                break;
            case 2:
                gE.modules.push(new imageModule_1.imageModule(2, 'image-module', module.url));
                break;
            case 3:
                var new_bars = [];
                for (i = 0; i < module.bars.length; i++) {
                    new_bars[i] = new barGraphBar_1.barGraphBar(module.bars[i].value, module.bars[i].label);
                }
                gE.modules.push(new barGraphModule_1.barGraphModule(3, 'bar-graph-module', module.title, new_bars, module.bgColor));
                break;
            case 4:
                gE.modules.push(new socialMediaModule_1.socialMediaModule(4, 'social-media-module', module.facebookUrl, module.twitterUrl, module.linkedinUrl, module.externalUrl, '#F8F8F8'));
                break;
            case 5:
                var new_tags = [];
                for (i = 0; i < module.tags.length; i++) {
                    new_tags[i] = new tagModuleTag_1.tagModuleTag(module.tags[i].id * 100 * Math.random(), module.tags[i].name, module.tags[i].color);
                }
                gE.modules.push(new tagModule_1.tagModule(5, 'tags-module', new_tags, module.bgColor));
                break;
            case 6:
                gE.modules.push(new emailModule_1.emailModule(6, 'email-module', module.email, module.content, module.bgColor));
                break;
            case 7:
                gE.modules.push(new scaleChartModule_1.scaleChartModule(7, 'scale-chart-module', module.title, module.scales, module.bgColor));
                break;
            case 8:
                gE.modules.push(new pieChartModule_1.pieChartModule(8, 'pie-chart-module', module.title, module.labels, module.data, module.bgColor));
                break;
            case 9:
                gE.modules.push(new accordionModule_1.accordionModule(9, 'accordion-module', module.title, module.items, module.bgColor));
                break;
            case 10:
                gE.modules.push(new tabsModule_1.tabsModule(10, 'tabs-module', module.items, module.bgColor));
                break;
            case 11:
                gE.modules.push(new embedModule_1.embedModule(11, 'embed-module', module.title, module.content));
                break;
            case 12:
                gE.modules.push(new devicesPlatformsModule_1.devicesPlatformsModule(12, 'devices-platforms-module', module.options, module.bgColor));
                break;
            case 13:
                gE.modules.push(new aboutModule_1.aboutModule(13, 'about-module', module.content, module.bgColor));
                break;
            case 14:
                gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', [module.content[0], module.content[1]], module.bgColor));
                break;
            default:
                console.log("Err");
        }
    };
    return cloneModuleService;
}());
cloneModuleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], cloneModuleService);
exports.cloneModuleService = cloneModuleService;
//# sourceMappingURL=cloneModule.service.js.map