import {Injectable} from '@angular/core';
import {ApiHttpService} from "../../core/services/api-http.service";
import {Observable, throwError} from "rxjs";
import {News} from "./news.inreface";
import {HttpParams} from "@angular/common/http";
import {catchError, delay, map, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    error = '';

    constructor(private apiHttpService: ApiHttpService) { }

    getNews(): Observable<News[]> {
        let params = new HttpParams();
        params = params.append('_limit', '30');
        // TODO в чем разница методов append и set?
        // params = params.set('_limit', '30');
        // set - изменить, append - добавить

        // TODO попробовать сделать, чтоб функция принимала параметр numberOfNews,
        // который будем из инпута получать и по кнопке вызывать метод данный,
        // и передавать этот параметр как значение value в объект params

        return this.apiHttpService.get('/v2/articles', {
            params,
            // observe: 'body',
            // при помощи параметра observe можем указать какой тип данных мы хотим полчить в ответе,
            // body - значение по дефолту
        }).pipe(
            delay(1000), // искусственная задержка
            map((newsList) => {
                newsList.map((newsItem) => {
                    newsItem.publishedAt = new Intl.DateTimeFormat("ru", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }).format(Date.parse(newsItem.publishedAt));
                });
                return newsList;
            }),
            catchError(error => { // вариант обработки ошибки
                console.log('!!!Error: ', error.message);
                this.error = error.message;
                return throwError(error);
            }),
            tap(response => {console.log(response);}), // посмотреть, что в body
        );
    }
}
