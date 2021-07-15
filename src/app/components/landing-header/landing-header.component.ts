import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hacker-news-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
  isResponsive: boolean = false;
  constructor() {}

  /**
   * This method will add a responsive class for the responsive menus
   */
  showMenus() {
    this.isResponsive = !this.isResponsive;
  }
}
