export class scaleChartModule {
    id:number;
    name:string;
    title:string;
    scales:any;

    constructor(id:number,name:string,title:string,scales:any) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.scales = scales;
    }
}
