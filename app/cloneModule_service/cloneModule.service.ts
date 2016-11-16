import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { textModule } from '../text_module/textModule';
import { imageModule } from '../image_module/imageModule';
import { barGraphModule } from '../bar_graph_module/barGraphModule';
import { socialMediaModule } from '../social_media_module/socialMediaModule';
import { tagModule } from '../tag_module/tagModule';
import { emailModule } from '../email_module/emailModule';
import { scaleChartModule } from '../scale_chart_module/scaleChartModule';
import { pieChartModule } from '../pie_chart_module/pieChartModule';
declare var toastr:any;

@Injectable()
export class cloneModuleService {
    cloneModule(gE,module) {
        switch(module.id) {
            case 1:
                gE.modules.push(new textModule(1,'text-module',module.content,module.bgColor));
                break;
            case 2:
                gE.modules.push(new imageModule(2,'image-module',module.url));
                break;
            case 3:
                gE.modules.push(new barGraphModule(3,'bar-graph-module',module.titles,module.bars,module.bgColor));
                break;
            case 4:
                gE.modules.push(new socialMediaModule(4,'social-media-module',module.facebookUrl,module.twitterUrl,module.linkedinUrl,module.externalUrl,'#F8F8F8'));
                break;
            case 5:
                gE.modules.push(new tagModule(5,'tags-module',module.tags,module.bgColor));
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
            default:
                console.log("Err");
        }
    }

}
