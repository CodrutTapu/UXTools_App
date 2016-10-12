export class emailModule {
    id:number;
    name:string;
    email:string;
    content:any;

    constructor(id:number,name:string,email:string,content:any) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.content = content;
    }
}
