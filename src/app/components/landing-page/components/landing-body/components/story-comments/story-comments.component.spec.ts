import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCommentsComponent } from './story-comments.component';

describe('StoryCommentsComponent', () => {
  let component: StoryCommentsComponent;
  let fixture: ComponentFixture<StoryCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCommentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCommentsComponent);
    component = fixture.componentInstance;
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

  it('When toggle method called for first comment, firstload is false and showCommentText flag is false for that comment', () => {
    component.toggle(0);
    expect(component.firstLoad).toBeFalse();
    expect(component.showCommentText[0].showText).toBeFalse();
  });
});
