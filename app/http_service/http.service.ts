import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';

@Injectable()
export class HTTTPService {

    constructor (private _http: Http) {}

    getProjects(author_id) {
        return this._http.get('http://localhost:8000/public/getprojects/' + author_id)
            .map(res => res.json());
    }

    getProject(author_id, project_type, project_id) {
        return this._http.get('http://localhost:8000/public/edit/' + author_id + '/' + project_type + '/' + project_id)
            .map(res => res.json());
    }

}
