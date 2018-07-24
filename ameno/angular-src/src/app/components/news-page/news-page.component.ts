import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import { INewsCards } from '../../mappers/news.mapper';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit {
  public NewsList: Array<INewsCards>;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.NewsList = news;
    },
      err => {
        console.log(err);
      })
  }

}
