import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NewsListModule} from "./modules/news-list/news-list.module";
import {ErrorPageComponent} from "./modules/error-page/error-page.component";
import {DetailedNewsModule} from "./modules/detailed-news/detailed-news.module";


@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NewsListModule,
        DetailedNewsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
