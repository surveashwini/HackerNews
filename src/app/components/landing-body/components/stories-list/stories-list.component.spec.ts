import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { STORIES } from 'src/app/constants/test-mocks/test-mock-data';

import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { StoryDetailsComponent } from '../story-details/story-details.component';

import { StoriesListComponent } from './stories-list.component';

describe('StoriesListComponent', () => {
  let component: StoriesListComponent;
  let fixture: ComponentFixture<StoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StoriesListComponent,
        StoryDetailsComponent,
        FormatUrlPipe,
        DateAgoPipe,
      ],
    })
      .overrideComponent(StoriesListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when 0 news are received, component loads 0 hacker-news-story-details component', () => {
    component.news = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll('hacker-news-story-details').length
    ).toEqual(0);
  });

  it('when 5 news are received, component loads 5 hacker-news-story-details component', () => {
    component.news = STORIES;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.story-icon').length).toEqual(5);
  });
});
