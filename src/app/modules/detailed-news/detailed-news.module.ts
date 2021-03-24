import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailedNewsComponent} from "./detailed-news.component";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
    declarations: [
        DetailedNewsComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class DetailedNewsModule {
}
