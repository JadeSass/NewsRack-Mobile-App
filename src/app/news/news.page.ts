import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  article;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}
