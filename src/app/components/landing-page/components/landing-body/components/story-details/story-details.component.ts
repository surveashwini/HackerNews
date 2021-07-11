import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'hacker-news-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent {
  @Input() story: any;
  @Input() index: any;
  @Input() isCommentContainer: boolean = false;
  @Output() emitShowComments: EventEmitter<number> = new EventEmitter();

  showComments() {
    this.emitShowComments.emit(this.index);
  }
}
