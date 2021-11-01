import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintPartnerFaqDialogComponent } from './print-partner-faq-dialog.component';

describe('PrintPartnerFaqDialogComponent', () => {
  let component: PrintPartnerFaqDialogComponent;
  let fixture: ComponentFixture<PrintPartnerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPartnerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPartnerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
