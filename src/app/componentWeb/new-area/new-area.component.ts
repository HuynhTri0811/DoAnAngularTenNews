import { Component, OnInit } from '@angular/core';
import { NewsInformationService } from '../../service/news.service';
import { newInformation } from '../../models/new';

@Component({
  selector: 'app-new-area',
  templateUrl: './new-area.component.html',
  styleUrls: ['./new-area.component.css']
})
export class NewAreaComponent implements OnInit {

  public newInformationOne :newInformation;
  public newsInformation = [];
  constructor(private _newsInformationService : NewsInformationService) { }


  ngOnInit(): void {
    this._newsInformationService.getNewsInformationWithGroupNew().subscribe(data => this.newsInformation = data);

  }

}
