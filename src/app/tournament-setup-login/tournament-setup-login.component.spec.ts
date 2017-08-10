import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSetupLoginComponent } from './tournament-setup-login.component';

describe('TournamentSetupLoginComponent', () => {
  let component: TournamentSetupLoginComponent;
  let fixture: ComponentFixture<TournamentSetupLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentSetupLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSetupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
