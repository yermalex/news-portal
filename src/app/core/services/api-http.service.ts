import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {

    private apiUrl = 'https://test.spaceflightnewsapi.net/api';

    constructor(private http: HttpClient) {}

    public get(url: string, options?: any): Observable<any> {
        return this.http.get(this.apiUrl + url, options);
    }
}
