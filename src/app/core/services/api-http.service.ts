import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {

    constructor(private http: HttpClient) {
    }

    public get(url: string, options?: any): Observable<any> {
        return this.http.get(environment.apiUrl + url, options);
    }
}
