import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPartnerFaqDialogComponent } from './add-partner-faq-dialog.component';

describe('AddPartnerFaqDialogComponent', () => {
  let component: AddPartnerFaqDialogComponent;
  let fixture: ComponentFixture<AddPartnerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
