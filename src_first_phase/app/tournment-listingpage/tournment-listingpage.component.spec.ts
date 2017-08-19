import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournmentListingpageComponent } from './tournment-listingpage.component';

describe('TournmentListingpageComponent', () => {
  let component: TournmentListingpageComponent;
  let fixture: ComponentFixture<TournmentListingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournmentListingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournmentListingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
