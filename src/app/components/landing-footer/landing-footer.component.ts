import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hacker-news-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFooterComponent {}
