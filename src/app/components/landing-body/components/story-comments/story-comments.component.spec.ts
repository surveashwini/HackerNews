import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { COMMENTS, STORIES } from 'src/app/constants/test-mocks/test-mock-data';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';

import { StoryCommentsComponent } from './story-comments.component';

describe('StoryCommentsComponent', () => {
  let component: StoryCommentsComponent;
  let fixture: ComponentFixture<StoryCommentsComponent>;
  let processDataService: jasmine.SpyObj<ProcessDataService>;
  let comments = COMMENTS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [StoryCommentsComponent, DateAgoPipe, FormatUrlPipe],
      providers: [
        HttpClientTestingModule,
        ProcessDataService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 3 }),
            snapshot: {
              parent: {
                params: {
                  id: 1,
                },
              },
              paramMap: {
                get(name: string): string {
                  return '';
                },
              },
            },
          },
        },
      ],
    })
      .overrideComponent(StoryCommentsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCommentsComponent);
    component = fixture.componentInstance;
    processDataService = TestBed.get(ProcessDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When component is firstly loaded, firstLoad is true, showCommentText is initialized and hacker-news-story-details is loaded', () => {
    expect(component.firstLoad).toBeTrue();
    expect(component.showCommentText).toEqual([
      { index: 0, showText: true },
      { index: 1, showText: true },
      { index: 2, showText: true },
    ]);

    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll('hacker-news-story-details').length
    ).toEqual(1);
  });

  it('when 1 story is received, component loads 1 hacker-news-story-details component', () => {
    component.story = STORIES[0];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll('hacker-news-story-details').length
    ).toEqual(1);
  });

  it('it should assign stories on init from localStorage', fakeAsync(() => {
    var store = {
      story0: JSON.stringify(comments),
    };
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return store['story0'];
    });
    component.ngOnInit();
    expect(component.comments).toEqual(comments);
  }));

  it('it should assign comments on init from Server response', fakeAsync(() => {
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return null;
    });
    spyOn(processDataService, 'getTopCommentsForStory').and.returnValue(
      of(comments)
    );
    component.ngOnInit();
    expect(component.comments).toEqual(comments);
  }));

  it('When toggle method called for first comment, firstload is false and showCommentText flag is false for that comment', () => {
    component.toggle(0);
    expect(component.firstLoad).toBeFalse();
    expect(component.showCommentText[0].showText).toBeFalse();
  });
});
