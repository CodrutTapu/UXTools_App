import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { textModule } from '../text_module/textModule';
import { imageModule } from '../image_module/imageModule';
import { barGraphModule } from '../bar_graph_module/barGraphModule';
import { barGraphBar } from '../bar_graph_module/barGraphBar';
import { socialMediaModule } from '../social_media_module/socialMediaModule';
import { tagModule } from '../tag_module/tagModule';
import { tagModuleTag } from '../tag_module/tagModuleTag';
import { emailModule } from '../email_module/emailModule';
import { scaleChartModule } from '../scale_chart_module/scaleChartModule';
import { pieChartModule } from '../pie_chart_module/pieChartModule';
import { accordionModule } from '../accordion_module/accordionModule';
import { tabsModule } from '../tabs_module/tabsModule';
import { embedModule } from '../embed_module/embedModule';
import { devicesPlatformsModule } from '../devicesPlatforms_module/devicesPlatformsModule';
import { aboutModule } from '../about_module/aboutModule';
import { countingModule } from '../counting_module/countingModule';
declare var toastr:any;

@Injectable()
export class cloneModuleService {
    cloneModule(gE,module) {
        var i;
        switch(module.id) {
            case 1:
                gE.modules.push(new textModule(1,'text-module',module.content,module.bgColor));
                break;
            case 2:
                gE.modules.push(new imageModule(2,'image-module',module.url));
                break;
            case 3:
                var new_bars = [];
                for (i = 0; i < module.bars.length; i++) {
                    new_bars[i] = new barGraphBar(module.bars[i].value,module.bars[i].label);
                }
                gE.modules.push(new barGraphModule(3,'bar-graph-module',module.title,new_bars,module.bgColor));
                break;
            case 4:
                gE.modules.push(new socialMediaModule(4,'social-media-module',module.facebookUrl,module.twitterUrl,module.linkedinUrl,module.externalUrl,'#F8F8F8'));
                break;
            case 5:
                var new_tags = [];
                for (i = 0; i < module.tags.length; i++) {
                    new_tags[i] = new tagModuleTag(module.tags[i].id*100*Math.random(),module.tags[i].name,module.tags[i].color);
                }
                gE.modules.push(new tagModule(5,'tags-module',new_tags,module.bgColor));
                break;
            case 6:
                gE.modules.push(new emailModule(6,'email-module',module.email,module.content,module.bgColor));
                break;
            case 7:
                gE.modules.push(new scaleChartModule(7,'scale-chart-module',module.title,module.scales,module.bgColor));
                break;
            case 8:
                gE.modules.push(new pieChartModule(8,'pie-chart-module',module.title,module.labels,module.data,module.bgColor));
                break;
            case 9:
                gE.modules.push(new accordionModule(9,'accordion-module',module.title,module.items,module.bgColor));
                break;
            case 10:
                gE.modules.push(new tabsModule(10,'tabs-module',module.items,module.bgColor));
                break;
            case 11:
                gE.modules.push(new embedModule(11,'embed-module',module.title,module.content));
                break;
            case 12:
                gE.modules.push(new devicesPlatformsModule(12,'devices-platforms-module',module.options,module.bgColor));
                break;
            case 13:
                gE.modules.push(new aboutModule(13,'about-module',module.content,module.bgColor));
                break;
            case 14:
                gE.modules.push(new countingModule(14,'counting-module',[module.content[0],module.content[1]],module.bgColor));
                break;
            default:
                console.log("Err");
        }
    }

}
