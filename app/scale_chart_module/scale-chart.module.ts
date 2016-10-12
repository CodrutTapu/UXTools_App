import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock.component';
import {scaleChartModuleScale} from './scaleChartModuleScale';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
    selector: 'scale-chart-module',
    templateUrl: 'app/scale_chart_module/scale-chart.module.html',
    styleUrls: ['app/scale_chart_module/scale-chart.module.css'],
    inputs: ['gE']
})

export class ScaleChartModule {
    deleteScaleChartModule(gE) {
        gE.moduleType = {};
    }
    updateScaleValue(event:any,scale) {
        scale.value = event.target.value;
    }
    addScale(gE) {
        gE.moduleType.scales.push(new scaleChartModuleScale('side A','side B',50));
    }
    deleteScale(gE,scale) {
        gE.moduleType.scales.splice(gE.moduleType.scales.indexOf(scale), 1);
    }
    updateScaleTitle(gE) {
        $(document).off('click','.editable-scale-title').on('click','.editable-scale-title',function(){
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
    updateScaleSideA(scale,gE) {
        $(document).off('click','.editable-sideA').on('click','.editable-sideA',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      scale.sideA = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
    updateScaleSideB(scale,gE) {
        $(document).off('click','.editable-sideB').on('click','.editable-sideB',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      scale.sideB = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
}
