import { Component, OnInit ,Input } from '@angular/core';
import { newInformation } from '../../models/new';

@Component({
  selector: 'app-information-news-tab-width-component',
  templateUrl: './information-news-tab-width-component.component.html',
  styleUrls: ['./information-news-tab-width-component.component.css']
})
export class InformationNewsTabWidthComponentComponent implements OnInit {

  @Input() NewInformation : newInformation;
  @Input() classImg       : string;

  constructor() { }

  ngOnInit(): void {

    if(this.NewInformation.thumbnail.url.search("https://cmsadmin.vccu.asia") == -1 && this.NewInformation.thumbnail.url.search("https://vccucmsdemo.dgk.vn/") == -1){
      this.NewInformation.thumbnail.url = "https://cmsadmin.vccu.asia/"+this.NewInformation.thumbnail.url;
    }
  }

}
