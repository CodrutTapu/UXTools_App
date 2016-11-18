export class devicesPlatformsModule {
    id:number;
    name:string;
    options:any;
    bgColor:string;

    constructor(id:number,name:string,options:any,bgColor:string) {
        this.id = id;
        this.name = name;
        this.options = options;
        this.bgColor = bgColor;
    }
}
