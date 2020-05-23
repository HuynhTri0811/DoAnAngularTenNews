import { Component, OnInit } from '@angular/core';
import { NewsInformationService } from '../../service/news.service';

@Component({
  selector: 'app-more-news-area',
  templateUrl: './more-news-area.component.html',
  styleUrls: ['./more-news-area.component.css']
})
export class MoreNewsAreaComponent implements OnInit {

  public newsInformation = [];
  constructor(private _newsInformationService : NewsInformationService) { }

  ngOnInit(): void {
    this._newsInformationService.getNewsInformationWithGroupNew().subscribe(data => this.newsInformation = data);
    console.log(this.newsInformation);
  }

}
