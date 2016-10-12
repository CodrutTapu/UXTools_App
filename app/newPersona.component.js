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
var http_service_1 = require('./http_service/http.service');
var gridElem_1 = require('./gridElem');
var textModule_1 = require('./text_module/textModule');
var router_1 = require('@angular/router');
var newPersonaComponent = (function () {
    function newPersonaComponent(_httpService, route) {
        this._httpService = _httpService;
        this.getData = [];
        this.gridElements = [new gridElem_1.gridElem(4, 1, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0'), new gridElem_1.gridElem(4, 2, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0'), new gridElem_1.gridElem(4, 3, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0')];
        this.id = 3;
        this.author_id = route.snapshot.params['author_id'];
    }
    newPersonaComponent.prototype.addGridElement = function (dim) {
        this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, 0, '#F8F8F8', '#4c7ba0'));
        this.id = this.id + 1;
    };
    newPersonaComponent.prototype.savePersona = function () {
        var ajaxurl = '/public/saveNewPersona', data = { 'author_id': this.author_id, 'project_name': this.project_name, 'gridElements': JSON.stringify(this.gridElements) };
        $.post(ajaxurl, data, function (response) { alert("Persona saved!"); });
    };
    newPersonaComponent = __decorate([
        core_1.Component({
            selector: 'new-persona',
            templateUrl: 'app/persona.component.html',
            providers: [http_service_1.HTTTPService],
        }), 
        __metadata('design:paramtypes', [http_service_1.HTTTPService, router_1.ActivatedRoute])
    ], newPersonaComponent);
    return newPersonaComponent;
}());
exports.newPersonaComponent = newPersonaComponent;
//# sourceMappingURL=newPersona.component.js.map