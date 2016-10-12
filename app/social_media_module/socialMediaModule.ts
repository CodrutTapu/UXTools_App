export class socialMediaModule {
    id:number;
    name:string;
    facebookUrl:string;
    twitterUrl:string;
    linkedinUrl:string;
    externalUrl:string;

    constructor(id:number,name:string,facebookUrl:string,twitterUrl:string,linkedinUrl:string,externalUrl:string) {
        this.id = id;
        this.name = name;
        this.facebookUrl = facebookUrl;
        this.twitterUrl = twitterUrl;
        this.linkedinUrl = linkedinUrl;
        this.externalUrl = externalUrl;
    }
}
