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
var http_service_1 = require("./http_service/http.service");
var DashboardComponent = (function () {
    function DashboardComponent(_httpService) {
        this._httpService = _httpService;
        this.projects = [];
        this.author_id = 1;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.httpGet();
    };
    DashboardComponent.prototype.httpGet = function () {
        var _this = this;
        var author_id = 1;
        this._httpService.getProjects(author_id)
            .subscribe(function (data) { return _this.projects = data; }, function (error) { return alert(Error); }, function () { return console.log("Finish!"); });
    };
    DashboardComponent.prototype.deleteProject = function (author_id, project_id) {
        var ajaxurl = '/public/deleteProject', data = { 'author_id': author_id, 'project_id': project_id };
        $.post(ajaxurl, data, function (response) { });
        this.httpGet();
        toastr["error"](" ", "Project Deleted!");
    };
    DashboardComponent.prototype.archiveProject = function (author_id, project_id, project_archived) {
        var ajaxurl = '/public/archiveProject', data = { 'author_id': author_id, 'project_id': project_id };
        $.post(ajaxurl, data, function (response) { });
        this.httpGet();
        if (project_archived == 1) {
            toastr["warning"](" ", "Project Unarchived!");
        }
        else {
            toastr["warning"](" ", "Project Archived!");
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-component',
        templateUrl: 'app/dashboard.component.html',
        providers: [http_service_1.HTTTPService],
    }),
    __metadata("design:paramtypes", [http_service_1.HTTTPService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map