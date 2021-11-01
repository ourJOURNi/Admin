import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintPartnerAgendaDialogComponent } from './print-partner-agenda-dialog.component';

describe('PrintPartnerAgendaDialogComponent', () => {
  let component: PrintPartnerAgendaDialogComponent;
  let fixture: ComponentFixture<PrintPartnerAgendaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPartnerAgendaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPartnerAgendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
