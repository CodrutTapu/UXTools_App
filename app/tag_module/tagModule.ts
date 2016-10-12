export class tagModule {
    id:number;
    name:string;
    tags:any;

    constructor(id:number,name:string,tags:any) {
        this.id = id;
        this.name = name;
        this.tags=tags;
    }
}
