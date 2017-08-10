import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class TagService {
    constructor(private _http: Http) { }

    get(url: string): Observable<any> {
        return this._http.get(url+'/tag_controller/find_all/')
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url +'/tag_controller/create/', body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    put(url: string, tag_id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url+'/tag_controller/update/'+ tag_id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string,tag_id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url+'/tag_controller/delete/' + tag_id, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}