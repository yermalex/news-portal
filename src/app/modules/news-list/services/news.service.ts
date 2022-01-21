import {Injectable} from '@angular/core';
import {ApiHttpService} from '../../../core/services/api-http.service';
import {Observable} from 'rxjs';
import {News} from '../models/news.inreface';
import {HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class NewsService {


    constructor(private apiHttpService: ApiHttpService) {
    }

    getNewsList(): Observable<News[]> {
        let params = new HttpParams();
        params = params.set('_limit', '30');

        return this.apiHttpService.get('/v3/articles', {params})
            .pipe(
                map(newsList => {
                    newsList.map((newsItem) => {
                        newsItem.publishedAt = new Intl.DateTimeFormat("ru", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }).format(Date.parse(newsItem.publishedAt));
                    });
                    return newsList;
                })
            );
    }

    getNewsById(id: string): Observable<News> {
        return this.apiHttpService.get('/v3/articles/' + id);
    }


}
