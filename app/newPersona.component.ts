import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HTTTPService} from './http_service/http.service';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';
import {user} from './user';
import {persona} from './persona';
import {textModule} from './text_module/textModule';
import {ActivatedRoute} from '@angular/router';
declare var $:any;

@Component({
    selector: 'new-persona',
    templateUrl: 'app/persona.component.html',
    providers: [HTTTPService],
})

export class newPersonaComponent {

    project_name;

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'),'#F8F8F8','#4c7ba0'), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'),'#F8F8F8','#4c7ba0'), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'),'#F8F8F8','#4c7ba0')];

    author_id:number;
    id:number = 3;

    constructor(private _httpService: HTTTPService, route: ActivatedRoute) {
        this.author_id = route.snapshot.params['author_id'];
    }

    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,0,'#F8F8F8','#4c7ba0'));
        this.id = this.id+1;
    }

    savePersona() {
        var ajaxurl = '/public/saveNewPersona',
        data =  {'author_id': this.author_id, 'project_name': this.project_name, 'gridElements': JSON.stringify(this.gridElements)};
        $.post(ajaxurl, data, function (response) {alert("Persona saved!")});
    }

}
