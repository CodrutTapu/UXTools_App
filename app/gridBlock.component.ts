import { Component } from '@angular/core';
import { TextModule } from './text_module/text.module';
import { textModule } from './text_module/textModule';
import { ViewTextModule } from './text_module/view.text.module'
import { ImageModule } from './image_module/image.module';
import { imageModule } from './image_module/imageModule';
import { ViewImageModule } from './image_module/view.image.module';
import { BarGraphModule } from './bar_graph_module/bar-graph.module';
import { barGraphModule } from './bar_graph_module/barGraphModule';
import { barGraphBar } from './bar_graph_module/barGraphBar';
import { ViewBarGraphModule } from './bar_graph_module/view.bar-graph.module';
import { SocialMediaModule } from './social_media_module/social-media.module';
import { socialMediaModule } from './social_media_module/socialMediaModule';
import { ViewSocialMediaModule } from './social_media_module/view.social-media.module'
import { TagModule } from './tag_module/tag.module';
import { tagModule } from './tag_module/tagModule';
import { tagModuleTag } from './tag_module/tagModuleTag';
import { ViewTagModule } from './tag_module/view.tag.module';
import { EmailModule } from './email_module/email.module';
import { emailModule } from './email_module/emailModule';
import { ViewEmailModule } from './email_module/view.email.module';
import { ScaleChartModule } from './scale_chart_module/scale-chart.module';
import { scaleChartModule } from './scale_chart_module/scaleChartModule';
import { scaleChartModuleScale } from './scale_chart_module/scaleChartModuleScale';
import { ViewScaleChartModule } from './scale_chart_module/view.scale-chart.module';
import { PieChartModule } from './pie_chart_module/pie-chart.module';
import { pieChartModule } from './pie_chart_module/pieChartModule';
import { ViewPieChartModule } from './pie_chart_module/view.pie-chart.module';
import { AccordionModule } from './accordion_module/accordion.module';
import { accordionModule } from './accordion_module/accordionModule';
import { accordionItem } from './accordion_module/accordionItem';
import { ViewAccordionModule } from './accordion_module/view.accordion.module';
import { TabsModule } from './tabs_module/tabs.module';
import { tabsModule } from './tabs_module/tabsModule';
import { tabsItem } from './tabs_module/tabsItem';
import { ViewTabsModule } from './tabs_module/view.tabs.module';
import { EmbedModule } from './embed_module/embed.module';
import { embedModule } from './embed_module/embedModule';
import { ViewEmbedModule } from './embed_module/view.embed.module';
import { DevicesPlatformsModule } from './devicesPlatforms_module/devices-platforms.module';
import { devicesPlatformsModule } from './devicesPlatforms_module/devicesPlatformsModule';
import { devicePlatform } from './devicesPlatforms_module/devicePlatform';
import { ViewDevicesPlatformsModule } from './devicesPlatforms_module/view.devices-platforms.module';
import { AboutModule } from './about_module/about.module';
import { aboutModule } from './about_module/aboutModule';
import { aboutItem } from './about_module/aboutItem';
import { ViewAboutModule } from './about_module/view.about.module';
import { CountingModule } from './counting_module/counting.module';
import { countingModule } from './counting_module/countingModule';
import { ViewCountingModule } from './counting_module/view.counting.module';
import { colorSchemeModule } from './colorScheme_component/colorScheme.module';
declare var $: any;

@Component({
    selector: 'grid-block',
    templateUrl: 'app/grid-block.html',
    styleUrls: ['app/grid-block.css'],
    inputs: ['gridElements','currentUser'],
})

export class GridBlock {
    gridElements:Array<number>;
    minGridElem(gE) {
        if(gE.dim == 2){
            alert("Too Small");
            gE.dim = 2;
        } else {
            gE.dim-=2;
        }
    }
    maxGridElem(gE) {
        if(gE.dim == 12){
            alert("Too Large");
            gE.dim = 12;
        } else {
            gE.dim+=2;
        }
    }
    deleteGridElem(gE) {
        this.gridElements.splice(this.gridElements.indexOf(gE), 1);
    }
    addTextModule(gE) {
        gE.moduleType = new textModule(1,'text-module','<h1>New Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>');
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addImageModule(gE) {
        gE.moduleType = new imageModule(2,'image-module','public/images/img-default.png');
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addBarGraphModule(gE) {
        gE.moduleType = new barGraphModule(3,'bar-graph-module','<h1>Bar Graph</h1>',[new barGraphBar(30,'<p>Label 1</p>'),new barGraphBar(50,'<p>Label 2</p>'),new barGraphBar(100,'<p>Label 3</p>')]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addSocialMediaModule(gE) {
        gE.moduleType = new socialMediaModule(4,'social-media-module','facebook','twitter','linkedin','external');
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addTagModule(gE) {
        gE.moduleType = new tagModule(5,'tags-module',[new tagModuleTag(1,'<p>Tag 1</p>','#e3e5e6'),new tagModuleTag(2,'<p>Tag 2</p>','#e3e5e6'),new tagModuleTag(3,'<p>Tag 3</p>','#e3e5e6')]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addEmailModule(gE) {
        gE.moduleType = new emailModule(6,'email-module','you@yourmail.com','<h2>This is a form field to collect emails.</h2><p>Give them a good reason.</p>');
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addScaleChartModule(gE) {
        gE.moduleType = new scaleChartModule(7,'scale-chart-module','<h1>Scale Chart</h1>',[new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',0),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',50),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',100)]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addPieChartModule(gE) {
        gE.moduleType = new pieChartModule(8,'pie-chart-module','<h1>Pie Chart</h1>',["Red", "Blue", "Yellow"],[12, 19, 3]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addAccordionModule(gE) {
        gE.moduleType = new accordionModule(9,'accordion-module','<h1>Accordion</h1>',[new accordionItem('item1','<p>Item 1</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item2','<p>Item 2</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item3','<p>Item 3</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>')]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addTabsModule(gE) {
        gE.moduleType = new tabsModule(10,'tabs-module',[new tabsItem('item1','<p>Tab 1</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>'),new tabsItem('item2','<p>Tab 2</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 2.</p>'),new tabsItem('item3','<p>Tab 3</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 3.</p>')]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addEmbedModule(gE) {
        gE.moduleType = new embedModule(11,'embed-module','<h1>Embed</h1>','https://www.youtube.com/embed/rn5s6H_Yamo');
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addDevicesPlatformsModule(gE) {
        gE.moduleType = new devicesPlatformsModule(12,'devices-platforms-module',[new devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>',true,'Mobile'),
                                                                                    new devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>',true,'Tablet'),
                                                                                    new devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>',true,'Laptop'),
                                                                                    new devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>',false,'Desktop'),
                                                                                    new devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>',false,'TV'),
                                                                                    new devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>',false,'Windows'),
                                                                                    new devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>',false,'Apple'),
                                                                                    new devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>',false,'Linux'),
                                                                                    new devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>',false,'Chrome'),
                                                                                    new devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>',false,'Firefox'),
                                                                                    new devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>',false,'IE'),
                                                                                    new devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>',false,'Safari')]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addAboutModule(gE) {
        gE.moduleType = new aboutModule(13,'about-module',[new aboutItem('<p>age</p>','<p>1-100</p>'),
                                                            new aboutItem('<p>occupation</p>','<p>What they do</p>'),
                                                            new aboutItem('<p>status</p>','<p>Single, Marries, Etc</p>'),
                                                            new aboutItem('<p>location</p>','<p>Where they live/work</p>'),
                                                            new aboutItem('<p>tier</p>','<p>Frequency of use</p>'),
                                                            new aboutItem('<p>archetype</p>','<p>Character model</p>'),
                                                            ]);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addSimpleCountingModule(gE) {
        gE.moduleType = new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00</span></p>','<p class="counting-description">Something you want to count</p>']);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addSufixedCountingModule(gE) {
        gE.moduleType = new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00</span><span class="counting-sufix"> min</span></p>','<p class="counting-description">Something you want to count</p>']);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addIntervalCountingModule(gE) {
        gE.moduleType = new countingModule(14,'counting-module',['<p class="counting-value"><span class="number">00-00</span></p>','<p class="counting-description">Something you want to count</p>']);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    addPrefixedCountingModule(gE) {
        gE.moduleType = new countingModule(14,'counting-module',['<p class="counting-value"><span class="counting-prefix">$ <span><span class="number">00</span></p>','<p class="counting-description">Something you want to count</p>']);
        gE.bgColor = "#F8F8F8";
        $('.add-module-modal').modal('hide');
    }
    closeTextEditor(event:any,gE) {
        if( event.srcElement.className == 'row sortable' || event.srcElement.className == 'grid-block-content' || event.target.className == 'row sortable' ||  event.target.className == 'grid-block-content') {
            $('editable').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-scale-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-sideA').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-sideB').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-pie-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-email-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-tag').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-text-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-barGrpah-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-bar-label').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-tabs-item-content').each(function(){
                $(this).summernote('destroy');
                $(this).removeAttr("style");
            });
            $('.editable-tabs-item-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-embed-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-about-item-name').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-about-item-value').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-counting-value').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-counting-description').each(function(){
                $(this).summernote('destroy');
            });
        }
    }
}
