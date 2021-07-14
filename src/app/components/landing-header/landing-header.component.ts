import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hacker-news-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {}
