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
  TOP_COMMENTS_LENGTH,
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
    this.initializeData();
    this.initializeComments();
    this.initializeShowCommentText();
  }
  /**
   * This method will retrieve the comment id from the routes and initialize index variable
   */
  initializeData(): void {
    this.index = Number(this.route.snapshot.paramMap.get(STORY_ID)) || 0;
  }

  /**
   * This method will retrieve and initialize the comments if any stored from storage
   * or from server response
   */
  initializeComments(): void {
    let news = this.getNewsFromStorage();
    this.story = (news && news[this.index]) || [];
    this.comments = this.getDataFromLocalStorageByKey(`${STORY}${this.index}`);
    if (this.comments.length === 0) {
      let commentIds: number[] =
        news[this.index]?.kids?.slice(0, TOP_COMMENTS_LENGTH) || [];
      this.getTopCommentsForStory(commentIds);
    }
  }

  /**
   * This method will retrieve and initialize the comments from server
   */
  getTopCommentsForStory(commentIds: number[]) {
    this.processDataService.getTopCommentsForStory(commentIds)?.subscribe(
      (comments: CommentInfo[]) => {
        this.comments = comments;
        localStorage.setItem(`${STORY}${this.index}`, JSON.stringify(comments));
        this.updateComponent();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /**
   * This method will trigger the change detection of the component
   */
  updateComponent() {
    this.cdr.detectChanges();
  }

  /**
   * This method will retrieve the news from the local storage and initialize news
   */
  getNewsFromStorage(): StoryInfo[] {
    let news = this.getDataFromLocalStorageByKey(NEWS);
    return news || [];
  }

  /**
   * This method will initialize ShowCommentText variable
   * It will be used when the user clicks on the toggle button besides the comment title
   */
  initializeShowCommentText(): void {
    this.showCommentText = this.showCommentText
      .fill({ index: 0, showText: true })
      .map((value, index: number) => {
        value = { index, showText: true };
        return value;
      });
  }

  /**
   * This method will retrieve data from local storage or return empty array
   */
  getDataFromLocalStorageByKey(key: string): Array<any> {
    return JSON.parse(localStorage.getItem(key) || NULL_STRING) || [];
  }

  /**
   * This method will retrieve the comment id from the routes and initialize index variable
   */
  toggle(index: number): void {
    this.firstLoad = false;
    this.showCommentText[index].showText =
      !this.showCommentText[index].showText;
  }
}
