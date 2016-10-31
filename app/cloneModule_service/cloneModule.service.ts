import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
declare var toastr:any;

@Injectable()
export class cloneModuleService {
    lastModule:any;

    cloneModule(gE,gridElements) {
        var i,ok=1;
        var length = gridElements.length;
        this.lastModule = gridElements[length-1];
        if(this.lastModule.moduleType == 0){
            this.lastModule.moduleType = gE.moduleType;
        } else {
            toastr["error"](" ", "You must add an empty Layout Element!");
        }
    }

}
