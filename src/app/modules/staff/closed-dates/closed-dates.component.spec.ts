import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDatesComponent } from './closed-dates.component';

describe('ClosedDatesComponent', () => {
  let component: ClosedDatesComponent;
  let fixture: ComponentFixture<ClosedDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
