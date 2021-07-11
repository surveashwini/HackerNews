import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hacker-news-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent {
  @Input() news: any;
  @Output() emitShowComments: EventEmitter<number> = new EventEmitter();
}
