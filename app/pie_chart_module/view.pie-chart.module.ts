import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;
declare var Chart:any;

@Component({
    selector: 'view-pie-chart-module',
    templateUrl: 'app/pie_chart_module/view-pie-chart.module.html',
    styleUrls: ['app/pie_chart_module/pie-chart.module.css'],
    inputs: ['gE']
})

export class ViewPieChartModule {
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
}
