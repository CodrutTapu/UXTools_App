export class devicesPlatformsModule {
    id:number;
    name:string;
    options:any;

    constructor(id:number,name:string,options:any) {
        this.id = id;
        this.name = name;
        this.options = options;
    }
}
