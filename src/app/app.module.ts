import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NewsListComponent} from './components/news-list/news-list.component';
import {FormsModule} from "@angular/forms";
import {ApiHttpService} from "./services/api-http.service";

@NgModule({
    declarations: [
        AppComponent,
        NewsListComponent
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
