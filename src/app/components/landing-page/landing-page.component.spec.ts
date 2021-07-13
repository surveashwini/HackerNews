import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let processDataService: jasmine.SpyObj<ProcessDataService>;
  let cdr: ChangeDetectorRef;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LandingPageComponent],
      providers: [HttpClientTestingModule, ProcessDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    processDataService = TestBed.get(ProcessDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initialize variables', () => {
    expect(component.stories).toEqual([]);
    expect(component.comments).toEqual([]);
  });

  it('it should assign stories on init', fakeAsync(() => {
    let expectedData = [
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
    spyOn(processDataService, 'getTopStories').and.returnValue(
      of(expectedData)
    );
    component.ngOnInit();
    expect(component.stories).toEqual(expectedData);
  }));

  it('it should assign comments on getTopCommentsForStory', fakeAsync(() => {
    let stories = [
      {
        by: 'DocFeind',
        descendants: 44,
        id: 27805709,
        kids: [2921983, 2921983, 2921983],
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
    let expectedData = [
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
    spyOn(processDataService, 'getTopCommentsForStory').and.returnValue(
      of(expectedData)
    );
    component.stories = stories;
    component.showComments(0);
    expect(component.comments).toEqual(expectedData);
  }));
});
