import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { NewsDataService } from '../news-data/news-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProcessDataService {
  constructor(private newsDataService: NewsDataService) {}

  getTopStories() {
    return this.newsDataService.getTopStories().pipe(
      concatMap((topStoryIds) => {
        let topFiveStoryIds = topStoryIds?.slice(0, 5);
        let storyInfoObservables: Array<any> = [];
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
