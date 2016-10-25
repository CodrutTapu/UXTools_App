import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {HTTTPService} from './http_service/http.service';
declare var $:any;
declare var toastr:any;

@Component({
    selector: 'dashboard-component',
    templateUrl: 'app/dashboard.component.html',
    providers: [HTTTPService],
})

export class DashboardComponent {

    projects:Array<any> = [];

    author_id:number = 1;

    viewArchivedProjects:boolean = false;

    constructor(private _httpService: HTTTPService) {}

    ngOnInit() {
        this.httpGet();
    }

    httpGet() {
        var author_id = 1;
        this._httpService.getProjects(author_id)
            .subscribe(
                data => this.projects = data,
                error => alert(Error),
                    () => console.log("Finish!")
            );
    }

    deleteProject(author_id, project_id) {
        var ajaxurl = '/public/deleteProject',
        data =  {'author_id': author_id, 'project_id': project_id};
        $.post(ajaxurl, data, function (response) {});
        this.httpGet();
        toastr["error"](" ", "Project Deleted!");
    }

    archiveProject(author_id, project_id, project_archived) {
        var ajaxurl = '/public/archiveProject',
        data =  {'author_id': author_id, 'project_id': project_id};
        $.post(ajaxurl, data, function (response) {});
        this.httpGet();
        if( project_archived == 1 ) {
            toastr["warning"](" ", "Project Unarchived!");
        } else {
            toastr["warning"](" ", "Project Archived!");
        }
    }

    changeViewArchivedProjects() {
        this.viewArchivedProjects = !this.viewArchivedProjects;
    }
}
