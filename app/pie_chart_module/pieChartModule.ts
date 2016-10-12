export class pieChartModule {
    id:number;
    name:string;
    title:string;
    labels:any;
    data:any;

    constructor(id:number,name:string,title:string,labels:any,data:any) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.labels = labels;
        this.data = data;
    }
}
