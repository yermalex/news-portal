import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {NewsService} from "../news-list/services/news.service";
import {News} from "../news-list/models/news.inreface";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-detailed-news',
    templateUrl: './detailed-news.component.html',
    styleUrls: ['./detailed-news.component.scss']
})
export class DetailedNewsComponent implements OnInit, OnDestroy {

    news: News = null;
    error = '';

    newsSub: Subscription;
    routeSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private newsService: NewsService
    ) {
    }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe((params: Params) => {
            this.newsSub = this.newsService.getNewsById(params.id)
                .subscribe(
                    detailedNews => this.news = detailedNews,
                    error => this.error = error.message
                );
        });
    }

    ngOnDestroy(): void {
        if (this.newsSub) {
            this.newsSub.unsubscribe();
        }

        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }
}
