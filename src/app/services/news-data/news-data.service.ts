import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  COMMENT_DETAILS,
  STORY_DETAILS,
  TOP_STORIES,
} from 'src/app/constants/api-urls/api-urls';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  constructor(private http: HttpClient) {}

  getTopStories(): Observable<any> {
    return this.http.get(TOP_STORIES);
  }

  getStoryDetails(id: string): Observable<any> {
    return this.http.get(STORY_DETAILS(id));
  }

  getComment(commentId: number): Observable<any> {
    return this.http.get(COMMENT_DETAILS(commentId));
  }
}
