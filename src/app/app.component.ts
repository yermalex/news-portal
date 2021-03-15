import {Component, OnInit} from '@angular/core';
import {ApiHttpService} from "./services/api-http.service";



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor(
        private apiHttpService: ApiHttpService
    ) {}

    ngOnInit() {
        this.apiHttpService.fetchNews();
    }



}
