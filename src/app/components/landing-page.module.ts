import { NgModule } from '@angular/core';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { StoriesListComponent } from './landing-body/components/stories-list/stories-list.component';
import { StoryCommentsComponent } from './landing-body/components/story-comments/story-comments.component';
import { StoryDetailsComponent } from './landing-body/components/story-details/story-details.component';
import { FormatUrlPipe } from 'src/app/pipes/format-url.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    DateAgoPipe,
    FormatUrlPipe,
    LandingHeaderComponent,
    LandingBodyComponent,
    LandingFooterComponent,
    StoriesListComponent,
    StoryCommentsComponent,
    StoryDetailsComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    LandingHeaderComponent,
    LandingBodyComponent,
    LandingFooterComponent,
  ],
})
export class LandingPageModule {}
