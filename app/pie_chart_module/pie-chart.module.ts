import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;
declare var Chart:any;

@Component({
    selector: 'pie-chart-module',
    templateUrl: 'app/pie_chart_module/pie-chart.module.html',
    styleUrls: ['app/pie_chart_module/pie-chart.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class PieChartModule {
    gridElements:Array<number>;
    gE;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deletePieChartModule(gE) {
        gE.moduleType = 0;
    }

    addPieSegment(gE) {
        gE.moduleType.labels.push("");
        gE.moduleType.data.push("");
    }

    removePieSegment(gE,dt) {
        gE.moduleType.labels.splice(gE.moduleType.data.indexOf(dt), 1);
        gE.moduleType.data.splice(gE.moduleType.data.indexOf(dt), 1);
    }

    lbUpdate(event:any,lb,gE) {
        if( event.target.value < 0 ) {
            gE.moduleType.labels[gE.moduleType.labels.indexOf(lb)] = - event.target.value;
        } else {
            gE.moduleType.labels[gE.moduleType.labels.indexOf(lb)] = event.target.value;
        }
    }

    dtUpdate(event:any,dt,gE) {
        if( event.target.value < 0 ) {
            gE.moduleType.data[gE.moduleType.data.indexOf(dt)] = - event.target.value;
        } else {
            gE.moduleType.data[gE.moduleType.data.indexOf(dt)] = event.target.value;
        }
    }

    createNewPieChart(gE) {
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
    }

    ngAfterViewInit() {
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
    }

    updatePieTitle(gE) {
        $(document).off('click','.editable-pie-title').on('click','.editable-pie-title',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }

}
