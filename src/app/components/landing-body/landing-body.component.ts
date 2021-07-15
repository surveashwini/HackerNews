import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { NEWS, NULL_STRING } from 'src/app/constants/statics/statics';
import { CommentInfo } from 'src/app/models/comment-info';
import { StoryInfo } from 'src/app/models/story-info';
import { ProcessDataService } from 'src/app/services/process-data/process-data.service';

@Component({
  selector: 'hacker-news-landing-body',
  templateUrl: './landing-body.component.html',
  styleUrls: ['./landing-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingBodyComponent {
  news: StoryInfo[] = [];
  comments: Array<CommentInfo> = [];

  constructor(
    private processDataService: ProcessDataService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeNewsFromStorage();
    if (this.news.length === 0) {
      this.getTopStoriesFromServer();
    }
  }

  /**
   * This method will retrieve top five stories from server
   */
  getTopStoriesFromServer() {
    this.processDataService.getTopStories()?.subscribe(
      (stories: any) => {
        this.news = stories;
        this.storeDataInLocalStorage();
        this.updateComponent();
      },
      (error) => {
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
   * This method will store the data in local storage
   */
  storeDataInLocalStorage() {
    localStorage.setItem(NEWS, JSON.stringify(this.news));
  }

  /**
   * This method will initialize news from local storage
   */
  initializeNewsFromStorage() {
    this.news = JSON.parse(localStorage.getItem(NEWS) || NULL_STRING) || [];
  }

  /**
   * This method will be invoked when user clicks on comments of the story from news page
   */
  showComments(i: number) {
    this.router.navigate(['/comments', i]);
    this.updateComponent();
  }
}
