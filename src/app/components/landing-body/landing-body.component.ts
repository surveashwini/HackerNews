import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
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
    this.news = JSON.parse(localStorage.getItem('news') || 'null') || [];
    if (this.news.length === 0) {
      this.processDataService.getTopStories()?.subscribe(
        (stories: any) => {
          this.news = stories;
          localStorage.setItem('news', JSON.stringify(this.news));
          this.cdr.detectChanges();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  showComments(i: number) {
    this.router.navigate(['/comments', i]);
    this.cdr.detectChanges();
  }
}
