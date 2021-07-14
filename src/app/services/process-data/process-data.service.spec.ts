import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import {
  COMMENTS,
  STORIES,
  STORY_IDS,
} from 'src/app/constants/test-mocks/test-mock-data';
import { CommentInfo } from 'src/app/models/comment-info';
import { StoryInfo } from 'src/app/models/story-info';
import { NewsDataService } from '../news-data/news-data.service';

import { ProcessDataService } from './process-data.service';

describe('ProcessDataService', () => {
  let service: ProcessDataService;
  let mockValidator: jasmine.SpyObj<NewsDataService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProcessDataService,
        {
          provide: NewsDataService,
          useValue: jasmine.createSpyObj('NewsDataService', [
            'getTopStories',
            'getComment',
            'getStoryDetails',
          ]),
        },
        HttpClientTestingModule,
      ],
    });

    service = TestBed.inject(ProcessDataService);
    mockValidator = TestBed.get(NewsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTopStories should return top 5 stories details', fakeAsync(() => {
    mockValidator.getTopStories.and.returnValue(of(STORY_IDS));

    mockValidator.getStoryDetails.and.returnValue(of(STORIES[0]));

    let capturedValue: Observable<StoryInfo[]> = of();

    service.getTopStories().subscribe((value) => {
      capturedValue = of(STORIES);
    });

    tick(3000);

    capturedValue.subscribe((value: StoryInfo[]) => {
      expect(value).toEqual(STORIES);
    });
  }));

  it('#getTopCommentsForStory should return top 3 stories comments details', fakeAsync(() => {
    mockValidator.getComment.and.returnValue(of(STORIES[0]));

    let capturedValue: Observable<CommentInfo[]> = of();

    service
      .getTopCommentsForStory([2921983, 2921983, 2921983])
      .subscribe((value: CommentInfo[]) => {
        capturedValue = of(COMMENTS);
      });

    tick(3000);

    capturedValue.subscribe((value: CommentInfo[]) => {
      expect(value).toEqual(COMMENTS);
    });
  }));
});
