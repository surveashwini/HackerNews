import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { StoryDetailsComponent } from '../story-details/story-details.component';

import { StoriesListComponent } from './stories-list.component';

describe('StoriesListComponent', () => {
  let component: StoriesListComponent;
  let fixture: ComponentFixture<StoriesListComponent>;
  let news = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StoriesListComponent,
        StoryDetailsComponent,
        FormatUrlPipe,
        DateAgoPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when five news are received, component loads five hacker-news-story-details component', () => {
    component.news = news;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll('hacker-news-story-details').length
    ).toEqual(5);
  });
});
