import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NewsDataService } from './news-data.service';
import { StoryInfo } from 'src/app/models/story-info';
import { CommentInfo } from 'src/app/models/comment-info';
import {
  COMMENTS,
  STORIES,
  STORY_IDS,
} from 'src/app/constants/test-mocks/test-mock-data';

describe('NewsDataService', () => {
  let httpTestingController: HttpTestingController;
  let service: NewsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(NewsDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTopStories should return array of story ids data', (done) => {
    const expectedData: number[] = STORY_IDS;
    const mockUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    service.getTopStories().subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(mockUrl);

    testRequest.flush(expectedData);
  });

  it('#getStoryDetails should return array of story details', (done) => {
    const expectedData: StoryInfo = STORIES[0];
    const mockUrl: string =
      'https://hacker-news.firebaseio.com/v0/item/27809153.json';

    service.getStoryDetails(STORIES[0].id.toString()).subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(mockUrl);

    testRequest.flush(expectedData);
  });

  it('#getComment should return array of comment details', (done) => {
    const expectedData: CommentInfo = COMMENTS[0];
    const mockCommentUrl: string =
      'https://hacker-news.firebaseio.com/v0/item/27830788.json';

    service.getComment(27830788).subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(mockCommentUrl);

    testRequest.flush(expectedData);
  });
});
