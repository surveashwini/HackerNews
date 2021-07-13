import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
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
    mockValidator.getTopStories.and.returnValue(
      of([
        7805709, 27803146, 27803314, 27799435, 27805059, 27805712, 27804120,
        27801729,
      ])
    );

    mockValidator.getStoryDetails.and.returnValue(
      of({
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      })
    );

    let capturedValue: any = [];
    let returnedData = [
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      },
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      },
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      },
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      },
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [27806004, 27806154, 27805933],
        score: 75,
        time: 1626050071,
        title:
          'The Potential Orwellian Horror of Central Bank Digital Currencies',
        type: 'story',
        url: 'https://www.adamseconomics.com/post/the-potential-orwellian-horror-of-central-bank-digital-currencies',
      },
    ];

    service.getTopStories().subscribe((value: any) => {
      capturedValue = of(returnedData);
    });

    tick(3000);

    capturedValue.subscribe((value: any) => {
      expect(value).toEqual(returnedData);
    });
  }));

  it('#getTopCommentsForStory should return top 3 stories comments details', fakeAsync(() => {
    mockValidator.getComment.and.returnValue(
      of({
        by: 'norvig',
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: 'comment',
      })
    );

    let capturedValue: any = [];
    let returnedData = [
      {
        by: 'norvig',
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: 'comment',
      },
      {
        by: 'norvig',
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: 'comment',
      },
      {
        by: 'norvig',
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: 'comment',
      },
    ];

    service
      .getTopCommentsForStory([2921983, 2921983, 2921983])
      .subscribe((value: any) => {
        capturedValue = of(returnedData);
      });

    tick(3000);

    capturedValue.subscribe((value: any) => {
      expect(value).toEqual(returnedData);
    });
  }));
});
