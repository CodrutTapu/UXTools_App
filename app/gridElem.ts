export class gridElem {
    id:number;
    dim:number;
    moduleType:any;
    bgColor:any;
    csColor:any;

    constructor(dim:number,id:number,moduleType:any,bgColor:any,csColor:any) {
        this.dim = dim;
        this.id = id;
        this.moduleType = moduleType;
        this.bgColor = bgColor;
        this.csColor = csColor;
    }
}
