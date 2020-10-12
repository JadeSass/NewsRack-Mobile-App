import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';



const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle:any;
  constructor(private http: HttpClient) {}
  fetchData(url){
    return this.http.get(`${API_URL}/${url}?&token=${API_KEY}`);
  }
}
