import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  constructor(private http: HttpClient) {}

  getTopStories(): Observable<any> {
    return this.http.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
  }

  getStoryDetails(id: string): Observable<any> {
    return this.http.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
  }

  getComment(commentId: number): Observable<any> {
    return this.http.get(
      `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
    );
  }
}
