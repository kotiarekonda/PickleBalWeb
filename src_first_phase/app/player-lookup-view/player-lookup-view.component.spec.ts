import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLookupViewComponent } from './player-lookup-view.component';

describe('PlayerLookupViewComponent', () => {
  let component: PlayerLookupViewComponent;
  let fixture: ComponentFixture<PlayerLookupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLookupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLookupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
