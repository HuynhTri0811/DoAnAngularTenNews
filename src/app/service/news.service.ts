import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newInformation } from '../models/new';
import { Observable } from 'rxjs';


@Injectable()
export class NewsInformationService{
  private _url : string = "https://cmsadmin.vccu.asia/news-data?group_news=1&_limit=10&_sort=date_publish:DESC";

  constructor(private http: HttpClient ){
    console.log(this._url)
  }

  getNewsInformationWithGroupNew():Observable<newInformation[]>{
    return this.http.get<newInformation[]>(this._url);
  }


}
