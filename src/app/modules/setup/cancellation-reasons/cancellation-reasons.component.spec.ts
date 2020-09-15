import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationReasonsComponent } from './cancellation-reasons.component';

describe('CancellationReasonsComponent', () => {
  let component: CancellationReasonsComponent;
  let fixture: ComponentFixture<CancellationReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
