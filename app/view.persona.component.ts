import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HTTTPService} from './http_service/http.service';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';
import {user} from './user';
import {persona} from './persona';
import {ActivatedRoute} from '@angular/router';
declare var $:any;

@Component({
    selector: 'view-persona',
    templateUrl: 'app/view.persona.component.html',
    providers: [HTTTPService],
})

export class ViewPersonaComponent {
    personaTitle;

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [];

    author_id:number;
    project_type:string;
    project_id:number;
    project_name:string;

    constructor(private _httpService: HTTTPService, route: ActivatedRoute) {
        this.author_id = route.snapshot.params['author_id'];
        this.project_type = route.snapshot.params['project_type'];
        this.project_id = route.snapshot.params['project_id'];
        this.project_name = route.snapshot.params['project_name'];
    }

    ngOnInit() {
        this.httpGet();
    }

    httpGet() {
        this._httpService.getProject(this.author_id, this.project_type, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getData[0].content)
            );
    }
}
