import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
declare var toastr:any;

@Injectable()
export class cloneModuleService {
    lastModule:any;

    cloneModule(gE,module) {
        gE.modules.push(module);
    }

}
