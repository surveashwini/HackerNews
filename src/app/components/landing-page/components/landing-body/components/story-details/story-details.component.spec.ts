import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';

import { StoryDetailsComponent } from './story-details.component';

describe('StoryDetailsComponent', () => {
  let component: StoryDetailsComponent;
  let fixture: ComponentFixture<StoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormatUrlPipe, DateAgoPipe, StoryDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When comment container is not present, hide story index', () => {
    component.isCommentContainer = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('.story-index'));
    expect(compiled.nativeElement).not.toBeNull;
  });
});
