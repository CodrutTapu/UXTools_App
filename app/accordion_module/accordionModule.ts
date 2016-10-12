export class accordionModule {
    id:number;
    name:string;
    title:string;
    items:any;

    constructor(id:number,name:string,title:string,items:any) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.items = items;
    }
}
