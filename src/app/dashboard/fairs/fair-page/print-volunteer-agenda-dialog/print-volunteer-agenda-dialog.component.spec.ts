import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintVolunteerAgendaDialogComponent } from './print-volunteer-agenda-dialog.component';

describe('PrintVolunteerAgendaDialogComponent', () => {
  let component: PrintVolunteerAgendaDialogComponent;
  let fixture: ComponentFixture<PrintVolunteerAgendaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintVolunteerAgendaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVolunteerAgendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
