import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STORY_DEFAULT } from 'src/app/constants/defaults/default-data';
import {
  NEWS,
  NULL_STRING,
  STORY,
  STORY_ID,
} from 'src/app/constants/statics/statics';
import { CommentInfo } from 'src/app/models/comment-info';
import { StoryInfo } from 'src/app/models/story-info';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';

@Component({
  selector: 'hacker-news-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCommentsComponent {
  comments: CommentInfo[] = [];
  story: StoryInfo = STORY_DEFAULT;
  index: number = 0;
  firstLoad: boolean = true;

  showCommentText: Array<{ index: number; showText: boolean }> = new Array(3);

  constructor(
    private processDataService: ProcessDataService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get(STORY_ID)) || 0;
    let news = JSON.parse(localStorage.getItem(NEWS) || NULL_STRING) || [];
    this.story = (news && news[this.index]) || [];

    this.comments =
      JSON.parse(
        localStorage.getItem(`${STORY}${this.index}`) || NULL_STRING
      ) || [];
    if (this.comments.length === 0) {
      this.processDataService
        .getTopCommentsForStory(news[this.index]?.kids?.slice(0, 3))
        ?.subscribe(
          (comments: CommentInfo[]) => {
            this.comments = comments;
            localStorage.setItem(
              `${STORY}${this.index}`,
              JSON.stringify(comments)
            );
            this.cdr.detectChanges();
          },
          (error: any) => {
            console.log(error);
          }
        );
    }

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
