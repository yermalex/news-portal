import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './components/filter/filter.component';
import {NewsListComponent} from './news-list.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
    declarations: [
        NewsListComponent,
        FilterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class NewsListModule {
}
