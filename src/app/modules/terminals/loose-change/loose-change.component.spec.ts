import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooseChangeComponent } from './loose-change.component';

describe('LooseChangeComponent', () => {
  let component: LooseChangeComponent;
  let fixture: ComponentFixture<LooseChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooseChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooseChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
