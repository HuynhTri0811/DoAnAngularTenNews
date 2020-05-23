import { Component, OnInit } from '@angular/core';
import { NewsInformationService } from '../../service/news.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  public newsInformation = [];
  constructor(private _newsInformationService : NewsInformationService) { }

  ngOnInit(): void {
    this._newsInformationService.getNewsInformationWithGroupNew().subscribe(data => this.newsInformation = data);
    console.log(this.newsInformation);
  }

}
