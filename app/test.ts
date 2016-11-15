import { Component } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: 'app/test.html'
})

export class test {
    listTeamOne:Array<string> = ['Text Module','Image Module','Pie Chart Module'];
    listTeamTwo:Array<string> = ['Scale Chart Module','About Module'];
    listTeamThree:Array<string> = ['Counting Module','Something Else','Else'];
    gridElements:Array<any> = [this.listTeamOne,this.listTeamTwo,this.listTeamThree];
}
