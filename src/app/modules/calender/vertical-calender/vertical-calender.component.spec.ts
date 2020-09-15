import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCalenderComponent } from './vertical-calender.component';

describe('VerticalCalenderComponent', () => {
  let component: VerticalCalenderComponent;
  let fixture: ComponentFixture<VerticalCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
