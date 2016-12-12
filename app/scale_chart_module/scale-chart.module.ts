import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock.component';
import { scaleChartModuleScale } from './scaleChartModuleScale';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'scale-chart-module',
    templateUrl: 'app/scale_chart_module/scale-chart.module.html',
    styleUrls: ['app/scale_chart_module/scale-chart.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class ScaleChartModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE,module) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteScaleChartModule(gE,module) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    updateScaleValue(event:any,scale) {
        scale.value = event.target.value;
    }

    addScale(module) {
        module.scales.push(new scaleChartModuleScale('side A','side B',50));
    }

    deleteScale(module,scale) {
        module.scales.splice(module.scales.indexOf(scale), 1);
    }

    updateScaleTitle(module) {
        $(document).off('click','.editable-scale-title').on('click','.editable-scale-title',function(){
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      module.title = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateScaleSideA(scale,module) {
        $(document).off('click','.editable-sideA').on('click','.editable-sideA',function(){
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      scale.sideA = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

    updateScaleSideB(scale,module) {
        $(document).off('click','.editable-sideB').on('click','.editable-sideB',function(){
            $(this).summernote({
                airMode: true,
                popover: {
                    air: [
                        ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                    ]
                },
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      scale.sideB = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',module.bgColor);
        });
    }

}
