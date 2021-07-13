import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ProcessDataService } from './../../services/process-data/process-data.service';

@Component({
  selector: 'hacker-news-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  stories: Array<any> = [];
  comments: Array<any> = [];
  constructor(
    private processDataService: ProcessDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.processDataService.getTopStories()?.subscribe(
      (stories: any) => {
        this.stories = stories;
        console.log(this.stories);
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showComments(i: number) {
    this.processDataService
      .getTopCommentsForStory(this.stories[i].kids.slice(0, 3))
      ?.subscribe(
        (comments: any) => {
          this.comments = comments;
          this.cdr.detectChanges();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
