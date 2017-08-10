import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {

    private _url: string = "http://localhost/blogapi/my-app/servers/index.php/front/find_all"
    private _cat_url: string = "http://localhost/blogapi/my-app/servers/index.php/category_controller/find_all"
    private _tag_url: string = "http://localhost/blogapi/my-app/servers/index.php/tag_controller/find_all"

    constructor(private _http: Http) { }
    getPosts() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
    getCats() {
        return this._http.get(this._cat_url)
            .map((response: Response) => response.json());
    }

    getTags() {
        return this._http.get(this._tag_url)
            .map((response: Response) => response.json());
    }
}