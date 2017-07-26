import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponenComponent } from './my-new-componen.component';

describe('MyNewComponenComponent', () => {
  let component: MyNewComponenComponent;
  let fixture: ComponentFixture<MyNewComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
