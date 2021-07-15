import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeaderComponent } from './landing-header.component';

describe('LandingHeaderComponent', () => {
  let component: LandingHeaderComponent;
  let fixture: ComponentFixture<LandingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heading Hacker News', () => {
    let element = fixture.nativeElement.querySelector(
      'span.landing-header-title'
    );
    expect(element.textContent).toEqual('Hacker News ');
  });

  it('should have header menus', () => {
    let firstMenuElement = fixture.nativeElement.querySelector('.header-menus');
    expect(firstMenuElement.textContent).toEqual('new');
  });
});
