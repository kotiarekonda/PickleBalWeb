import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLookUpPageComponent } from './player-look-up-page.component';

describe('PlayerLookUpPageComponent', () => {
  let component: PlayerLookUpPageComponent;
  let fixture: ComponentFixture<PlayerLookUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLookUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLookUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
