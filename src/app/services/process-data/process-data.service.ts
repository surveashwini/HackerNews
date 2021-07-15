import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { TOP_STORY_LENGTH } from 'src/app/constants/statics/statics';
import { NewsDataService } from '../news-data/news-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProcessDataService {
  constructor(private newsDataService: NewsDataService) {}

  getTopStories() {
    return this.newsDataService.getTopStories().pipe(
      concatMap((topStoryIds) => {
        let topFiveStoryIds = topStoryIds?.slice(0, TOP_STORY_LENGTH);
        let storyInfoObservables: Array<Observable<any>> = [];
        topFiveStoryIds?.forEach((storyId: string) => {
          storyInfoObservables.push(
            this.newsDataService.getStoryDetails(storyId)
          );
        });
        return zip(...storyInfoObservables);
      })
    );
  }

  getTopCommentsForStory(commentIds: Array<number>) {
    let commentAPIs =
      commentIds?.map((commentId) =>
        this.newsDataService.getComment(commentId)
      ) || [];
    return zip(...commentAPIs);
  }
}
