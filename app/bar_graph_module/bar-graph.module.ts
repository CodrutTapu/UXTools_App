import { Component, Input } from '@angular/core';
import { GridBlock } from '../gridBlock.component';
import { barGraphBar } from './barGraphBar';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
declare var $: any;

@Component({
    selector: 'bar-graph-module',
    templateUrl: 'app/bar_graph_module/bar-graph.module.html',
    styleUrls: ['app/bar_graph_module/bar-graph.module.css'],
    inputs: ['gE','gridElements'],
    providers: [cloneModuleService]
})

export class BarGraphModule {
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    cloneModule(gE) {
        this._cloneModuleService.cloneModule(gE,this.gridElements);
    }

    deleteBarGraphModule(gE) {
        gE.moduleType = 0;
    }

   addBarGraph(gE) {
       gE.moduleType.bars.push(new barGraphBar(50,'<p>New Label</p>'));
   }

   deleteBar(gE,bar) {
       gE.moduleType.bars.splice(gE.moduleType.bars.indexOf(bar), 1);
   }

   adjustBarLength(event:any,bar) {
       var pBLength = $('.progress').width();
       bar.value = Math.ceil((event.layerX*100)/pBLength);
   }

   updateBarGraphTitle(gE) {
       $(document).off('click','.editable-barGrpah-title').on('click','.editable-barGrpah-title',function(){
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

   updateBarLabel(bar,gE) {
       $(document).off('click','.editable-bar-label').on('click','.editable-bar-label',function(){
           $(this).summernote({
               toolbar: [
                   ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
               ],
               disableDragAndDrop: true,
               callbacks: {
                   onChange: function(contents, $editable) {
                     bar.label = contents;
                   }
               }
           });
           $(this).parent().find('.note-editable').css('background',gE.bgColor);
       });
   }

}
