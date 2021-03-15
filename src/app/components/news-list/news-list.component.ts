import {Component} from '@angular/core';
import {ApiHttpService} from "../../services/api-http.service";



@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent {
  constructor(
      private apiHttpService: ApiHttpService
  ) {}
}
