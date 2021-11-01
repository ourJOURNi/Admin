import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintChaperoneAgendaDialogComponent } from './print-chaperone-agenda-dialog.component';

describe('PrintChaperoneAgendaDialogComponent', () => {
  let component: PrintChaperoneAgendaDialogComponent;
  let fixture: ComponentFixture<PrintChaperoneAgendaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintChaperoneAgendaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintChaperoneAgendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
