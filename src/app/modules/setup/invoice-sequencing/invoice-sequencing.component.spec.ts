import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSequencingComponent } from './invoice-sequencing.component';

describe('InvoiceSequencingComponent', () => {
  let component: InvoiceSequencingComponent;
  let fixture: ComponentFixture<InvoiceSequencingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSequencingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSequencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
