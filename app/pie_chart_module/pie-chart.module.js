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
var PieChartModule = (function () {
    function PieChartModule(_cloneModuleService) {
        this._cloneModuleService = _cloneModuleService;
    }
    PieChartModule.prototype.cloneModule = function (gE) {
        this._cloneModuleService.cloneModule(gE, this.gridElements);
    };
    PieChartModule.prototype.deletePieChartModule = function (gE) {
        gE.moduleType = 0;
    };
    PieChartModule.prototype.addPieSegment = function (gE) {
        gE.moduleType.labels.push("");
        gE.moduleType.data.push("");
    };
    PieChartModule.prototype.removePieSegment = function (gE, dt) {
        gE.moduleType.labels.splice(gE.moduleType.data.indexOf(dt), 1);
        gE.moduleType.data.splice(gE.moduleType.data.indexOf(dt), 1);
    };
    PieChartModule.prototype.lbUpdate = function (event, lb, gE) {
        if (event.target.value < 0) {
            gE.moduleType.labels[gE.moduleType.labels.indexOf(lb)] = -event.target.value;
        }
        else {
            gE.moduleType.labels[gE.moduleType.labels.indexOf(lb)] = event.target.value;
        }
    };
    PieChartModule.prototype.dtUpdate = function (event, dt, gE) {
        if (event.target.value < 0) {
            gE.moduleType.data[gE.moduleType.data.indexOf(dt)] = -event.target.value;
        }
        else {
            gE.moduleType.data[gE.moduleType.data.indexOf(dt)] = event.target.value;
        }
    };
    PieChartModule.prototype.createNewPieChart = function (gE) {
        var pcModule = $('.pie-chart-module');
        $('#pieChart' + gE.id).remove();
        $('.pie-chart-content' + gE.id).append("<canvas id='pieChart" + gE.id + "' width='400' height='400'></canvas>");
        var ctx = document.getElementById("pieChart" + gE.id);
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: gE.moduleType.labels,
                datasets: [{
                        data: gE.moduleType.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(191, 63, 127, 0.2)',
                            'rgba(38, 12, 12, 0.2)',
                            'rgba(3, 124, 21, 0.2)',
                            'rgba(242, 230, 63, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(191, 63, 127, 1)',
                            'rgba(38, 12, 12, 1)',
                            'rgba(3, 124, 21, 1)',
                            'rgba(242, 230, 63, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            showScale: false
        });
        pcModule.find('.pie-chart-content').stop().show(200);
        pcModule.find('.create-pie-chart-box').stop().hide(200);
    };
    PieChartModule.prototype.ngAfterViewInit = function () {
        var ctx = document.getElementById("pieChart" + this.gE.id);
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.gE.moduleType.labels,
                datasets: [{
                        data: this.gE.moduleType.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(191, 63, 127, 0.2)',
                            'rgba(38, 12, 12, 0.2)',
                            'rgba(3, 124, 21, 0.2)',
                            'rgba(242, 230, 63, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(191, 63, 127, 1)',
                            'rgba(38, 12, 12, 1)',
                            'rgba(3, 124, 21, 1)',
                            'rgba(242, 230, 63, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            showScale: false
        });
    };
    PieChartModule.prototype.updatePieTitle = function (gE) {
        $(document).off('click', '.editable-pie-title').on('click', '.editable-pie-title', function () {
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
    return PieChartModule;
}());
PieChartModule = __decorate([
    core_1.Component({
        selector: 'pie-chart-module',
        templateUrl: 'app/pie_chart_module/pie-chart.module.html',
        styleUrls: ['app/pie_chart_module/pie-chart.module.css'],
        inputs: ['gE', 'gridElements', 'module'],
        providers: [cloneModule_service_1.cloneModuleService]
    }),
    __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
], PieChartModule);
exports.PieChartModule = PieChartModule;
//# sourceMappingURL=pie-chart.module.js.map