import { Component, OnInit , Input } from '@angular/core';
import { newInformation } from '../../models/new';

@Component({
  selector: 'app-information-news-evaluate-tab-component',
  templateUrl: './information-news-evaluate-tab-component.component.html',
  styleUrls: ['./information-news-evaluate-tab-component.component.css']
})
export class InformationNewsEvaluateTabComponentComponent implements OnInit {

  @Input() NewInformation : newInformation;

  constructor() { }

  ngOnInit(): void {
    if(this.NewInformation.thumbnail.url.search("https://cmsadmin.vccu.asia") == -1 && this.NewInformation.thumbnail.url.search("https://vccucmsdemo.dgk.vn/") == -1){
      this.NewInformation.thumbnail.url = "https://cmsadmin.vccu.asia/"+this.NewInformation.thumbnail.url;
    }
  }

}
