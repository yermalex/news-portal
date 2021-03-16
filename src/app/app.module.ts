import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NewsListComponent} from './modules/news/news-list/news-list.component';
import {FormsModule} from "@angular/forms";
import { DetailedNewsComponent } from './modules/news/detailed-news/detailed-news.component';


@NgModule({
    declarations: [
        AppComponent,
        NewsListComponent,
        DetailedNewsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
