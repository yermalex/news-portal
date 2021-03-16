import {Component, OnInit} from '@angular/core';

import {NewsService} from "../news.service";

import {News} from "../news.inreface";
import {Observable} from "rxjs";


@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

    newsList$: Observable<News[]>;
    error = '';

    constructor(
        private newsService: NewsService
    ) {}


    ngOnInit(): void {
        this.newsList$ = this.newsService.getNews();

        // this.newsList$.subscribe(
        //     newsList => {},
        //     error => {
        //         this.error = error.message;
        //     }
        // );
    }


}
