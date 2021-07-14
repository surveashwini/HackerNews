import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryCommentsComponent } from './components/story-comments/story-comments.component';

import { LandingBodyComponent } from './landing-body.component';

describe('LandingBodyComponent', () => {
  let component: LandingBodyComponent;
  let fixture: ComponentFixture<LandingBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingBodyComponent,
        StoriesListComponent,
        StoryCommentsComponent,
        DateAgoPipe,
        FormatUrlPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when news is received and comments are empty, component loads hacker-news-stories-list component', () => {
    component.news = [
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
    component.comments = [];

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('hacker-news-stories-list')).not.toBe(null);
  });

  it('Irrespective of news data if comments data is present, component loads hacker-news-story-comments component', () => {
    component.news = [
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
    component.comments = [
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

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('hacker-news-story-comments')).not.toBe(null);
  });
});
