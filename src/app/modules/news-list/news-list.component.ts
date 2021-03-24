import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from './services/news.service';
import {News} from './models/news.inreface';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit, OnDestroy {

    newsList: News[] = [];
    filteredNewsList: News[] = [];

    searchString = '';
    error = '';

    newsListSub: Subscription;

    constructor(
        private newsService: NewsService
    ) {
    }


    ngOnInit(): void {
        this.newsListSub = this.newsService.getNewsList()
            .subscribe(
                newsList => this.newsList = newsList,
                error => this.error = error.message
            );
    }

    ngOnDestroy(): void {
        if (this.newsListSub) {
            this.newsListSub.unsubscribe();
        }
    }

    filterNews(str: string): void {
        if (str.trim()) {
            this.searchString = str;
            this.filteredNewsList = this.newsList.filter(news => news.title.toLocaleLowerCase().includes(str.toLowerCase()));
        } else {
            this.searchString = str;
            this.filteredNewsList = [];
        }
    }

    cleanInput(): void {
        this.searchString = '';
        this.filteredNewsList = [];
    }

}
