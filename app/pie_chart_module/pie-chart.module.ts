import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;
declare var Chart:any;

@Component({
    selector: 'pie-chart-module',
    templateUrl: 'app/pie_chart_module/pie-chart.module.html',
    styleUrls: ['app/pie_chart_module/pie-chart.module.css'],
    inputs: ['gE']
})

export class PieChartModule {
    deletePieChartModule(gE) {
        gE.moduleType = {};
    }
    addPieSegment(gE) {
        gE.moduleType.labels.push("");
        gE.moduleType.data.push("");
    }
    removePieSegment(gE) {
        gE.moduleType.labels.pop();
        gE.moduleType.data.pop();
    }
    lbUpdate(event:any,lb,gE) {
        gE.moduleType.labels[gE.moduleType.labels.indexOf(lb)] = event.target.value;
    }
    dtUpdate(event:any,dt,gE) {
        gE.moduleType.data[gE.moduleType.data.indexOf(dt)] = event.target.value;
    }
    createNewPieChart(gE) {
            var pcModule = $('.pie-chart-module');
            $('#pieChart').remove();
            $('.pie-chart-content').append("<canvas id='pieChart' width='400' height='400'></canvas>");
            var ctx = document.getElementById("pieChart");
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
    ngOnInit() {
        var ctx = document.getElementById("pieChart");
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [{
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
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
