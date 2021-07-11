import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hacker-news-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.scss'],
})
export class StoryCommentsComponent {
  @Input() comments: any;
  @Input() story: any;
  @Input() index: any;
  firstLoad: boolean = true;
  showCommentText: Array<{ index: number; showText: boolean }> = new Array(3);

  ngOnInit() {
    this.showCommentText = this.showCommentText
      .fill({ index: 0, showText: true })
      .map((value, index: number) => {
        value = { index, showText: true };
        return value;
      });
  }

  toggle(index: number) {
    this.firstLoad = false;
    this.showCommentText[index].showText =
      !this.showCommentText[index].showText;
  }
}
