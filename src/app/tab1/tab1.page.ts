import { Component, OnInit  } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.newsService.fetchData('top-headlines?country=nigeria&category=business').subscribe(data =>{
      console.log(data);
    });
  }

}
