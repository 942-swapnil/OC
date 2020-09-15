import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenadanceFormComponent } from './attenadance-form.component';

describe('AttenadanceFormComponent', () => {
  let component: AttenadanceFormComponent;
  let fixture: ComponentFixture<AttenadanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttenadanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenadanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
