import {
  Component,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'hacker-news-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryDetailsComponent {
  @Input() story: any;
  @Input() index: number = 0;
  @Input() isCommentContainer: boolean = false;
  @Output() emitShowComments: EventEmitter<number> = new EventEmitter();

  showComments() {
    this.emitShowComments.emit(this.index);
  }
}
