import { async, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NewsDataService } from './news-data.service';
import { StoryInfo } from 'src/app/models/story-info';
import { CommentInfo } from 'src/app/models/comment-info';
import { HttpClient } from '@angular/common/http';

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
    const expectedData: number[] = [
      7805709, 27803146, 27803314, 27799435, 27805059, 27805712, 27804120,
      27801729,
    ];

    service.getTopStories().subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );

    testRequest.flush(expectedData);
  });

  it('#getStoryDetails should return array of story details', (done) => {
    const expectedData: StoryInfo = {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids: [9224, 8917, 8952],
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    };

    service.getStoryDetails('8863').subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://hacker-news.firebaseio.com/v0/item/8863.json'
    );

    testRequest.flush(expectedData);
  });

  it('#getComment should return array of comment details', (done) => {
    const expectedData: CommentInfo = {
      by: 'norvig',
      id: 2921983,
      kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
      parent: 2921506,
      text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
      time: 1314211127,
      type: 'comment',
    };

    service.getComment(2921983).subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://hacker-news.firebaseio.com/v0/item/2921983.json'
    );

    testRequest.flush(expectedData);
  });
});
