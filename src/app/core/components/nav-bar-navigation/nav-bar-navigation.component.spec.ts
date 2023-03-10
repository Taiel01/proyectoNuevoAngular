import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNavigationComponent } from './nav-bar-navigation.component';

describe('NavBarNavigationComponent', () => {
  let component: NavBarNavigationComponent;
  let fixture: ComponentFixture<NavBarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
