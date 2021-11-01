import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintStudentAgendaDialogComponent } from './print-student-agenda-dialog.component';

describe('PrintStudentAgendaDialogComponent', () => {
  let component: PrintStudentAgendaDialogComponent;
  let fixture: ComponentFixture<PrintStudentAgendaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintStudentAgendaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStudentAgendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
