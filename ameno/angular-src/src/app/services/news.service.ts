import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsMapper } from '../mappers/news.mapper';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {
  news: any;

  constructor(private http: Http) { }

  getNews(): Observable<any> {
    return this.http.get('http://li934-105.members.linode.com/api/news/messages')
      .map(response => NewsMapper.mapResponse(response.json()));
  }

}
