import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {delay} from "rxjs/operators";

export interface News {
    id: string;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: [];
    events: [];
}

@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {

    news: News[] = [];
    loading = false;

    constructor(
        private http: HttpClient,
    ) {}

    fetchNews() {
        this.loading = true;

        this.http.get<News[]>(environment.apiUrl)
            .pipe(delay(3000))
            .subscribe(news => {
                this.news = news;

                this.news.forEach(newsItem => {
                    newsItem.publishedAt = new Intl.DateTimeFormat("ru", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }).format(Date.parse(newsItem.publishedAt));
                });

                this.loading = false;
            });
    }
}
