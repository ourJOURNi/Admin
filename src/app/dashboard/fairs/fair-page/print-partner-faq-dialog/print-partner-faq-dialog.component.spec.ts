import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPartnerFaqDialogComponent } from './print-partner-faq-dialog.component';

describe('PrintPartnerFaqDialogComponent', () => {
  let component: PrintPartnerFaqDialogComponent;
  let fixture: ComponentFixture<PrintPartnerFaqDialogComponent>;

  beforeEach(async(() => {
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
