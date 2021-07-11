import { NgModule } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingBodyComponent } from './components/landing-body/landing-body.component';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { StoriesListComponent } from './components/landing-body/components/stories-list/stories-list.component';
import { StoryCommentsComponent } from './components/landing-body/components/story-comments/story-comments.component';
import { StoryDetailsComponent } from './components/landing-body/components/story-details/story-details.component';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';

@NgModule({
  declarations: [
    DateAgoPipe,
    FormatUrlPipe,
    LandingPageComponent,
    LandingHeaderComponent,
    LandingBodyComponent,
    LandingFooterComponent,
    StoriesListComponent,
    StoryCommentsComponent,
    StoryDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    LandingPageComponent,
    LandingHeaderComponent,
    LandingBodyComponent,
    LandingFooterComponent,
  ],
})
export class LandingPageModule {}
