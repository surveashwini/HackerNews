import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { STORIES } from 'src/app/constants/test-mocks/test-mock-data';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryCommentsComponent } from './components/story-comments/story-comments.component';

import { LandingBodyComponent } from './landing-body.component';

describe('LandingBodyComponent', () => {
  let component: LandingBodyComponent;
  let fixture: ComponentFixture<LandingBodyComponent>;
  let processDataService: jasmine.SpyObj<ProcessDataService>;
  let cdr: ChangeDetectorRef;
  let expectedData = STORIES;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        LandingBodyComponent,
        StoriesListComponent,
        StoryCommentsComponent,
        DateAgoPipe,
        FormatUrlPipe,
      ],

      providers: [HttpClientTestingModule, ProcessDataService],
    })
      .overrideComponent(LandingBodyComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBodyComponent);
    component = fixture.componentInstance;
    processDataService = TestBed.get(ProcessDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should assign stories on init from localStorage', fakeAsync(() => {
    var store = {
      news: JSON.stringify(expectedData),
    };
    spyOn(localStorage, 'getItem').and.callFake(function () {
      return store['news'];
    });
    component.ngOnInit();
    expect(component.news).toEqual(expectedData);
  }));

  it('it should assign stories on init from Server response', fakeAsync(() => {
    var store = {
      news: JSON.stringify(expectedData),
    };
    spyOn(processDataService, 'getTopStories').and.returnValue(
      of(expectedData)
    );
    component.ngOnInit();
    expect(component.news).toEqual(expectedData);
  }));
});
