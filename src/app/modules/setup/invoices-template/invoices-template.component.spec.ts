import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesTemplateComponent } from './invoices-template.component';

describe('InvoicesTemplateComponent', () => {
  let component: InvoicesTemplateComponent;
  let fixture: ComponentFixture<InvoicesTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
