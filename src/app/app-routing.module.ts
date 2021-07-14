import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryCommentsComponent } from './components/landing-body/components/story-comments/story-comments.component';
import { LandingBodyComponent } from './components/landing-body/landing-body.component';

const routes: Routes = [
  { path: '', component: LandingBodyComponent },
  { path: 'news', component: LandingBodyComponent },
  { path: 'comments/:storyId', component: StoryCommentsComponent },
  { path: '**', component: LandingBodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
