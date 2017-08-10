import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSignInSignUpPageComponent } from './tournament-sign-in-sign-up-page.component';

describe('TournamentSignInSignUpPageComponent', () => {
  let component: TournamentSignInSignUpPageComponent;
  let fixture: ComponentFixture<TournamentSignInSignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentSignInSignUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSignInSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
