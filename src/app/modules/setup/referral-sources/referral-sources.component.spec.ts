import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSourcesComponent } from './referral-sources.component';

describe('ReferralSourcesComponent', () => {
  let component: ReferralSourcesComponent;
  let fixture: ComponentFixture<ReferralSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
