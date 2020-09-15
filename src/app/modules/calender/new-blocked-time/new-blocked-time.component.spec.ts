import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlockedTimeComponent } from './new-blocked-time.component';

describe('NewBlockedTimeComponent', () => {
  let component: NewBlockedTimeComponent;
  let fixture: ComponentFixture<NewBlockedTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBlockedTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlockedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
