import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorPageComponent} from "./modules/error-page/error-page.component";
import {NewsListComponent} from "./modules/news-list/news-list.component";
import {DetailedNewsComponent} from "./modules/detailed-news/detailed-news.component";

const routes: Routes = [
    {path: 'news', component: NewsListComponent},
    {path: 'news/:id', component: DetailedNewsComponent},
    {path: '**', component: ErrorPageComponent},
    {path: '', redirectTo: '/news', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
