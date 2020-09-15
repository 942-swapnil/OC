import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerminalsComponent } from './add-terminals.component';

describe('AddTerminalsComponent', () => {
  let component: AddTerminalsComponent;
  let fixture: ComponentFixture<AddTerminalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTerminalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
