import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hacker-news-landing-body',
  templateUrl: './landing-body.component.html',
  styleUrls: ['./landing-body.component.scss'],
})
export class LandingBodyComponent {
  @Input() news: any;
  @Input() comments: any;
  index: any;
  @Output() emitShowComments: EventEmitter<number> = new EventEmitter();

  constructor() {}

  showComments(index: number) {
    this.index = index;
    this.emitShowComments.emit(index);
  }
}
