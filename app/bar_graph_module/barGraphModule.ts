export class barGraphModule {
    id:number;
    name:string;
    title:string;
    bars:any;

    constructor(id:number,name:string,title:string,bars:any) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.bars = bars;
    }
}
