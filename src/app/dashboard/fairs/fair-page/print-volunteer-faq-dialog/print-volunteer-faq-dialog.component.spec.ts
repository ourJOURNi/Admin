import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintVolunteerFaqDialogComponent } from './print-volunteer-faq-dialog.component';

describe('PrintVolunteerFaqDialogComponent', () => {
  let component: PrintVolunteerFaqDialogComponent;
  let fixture: ComponentFixture<PrintVolunteerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintVolunteerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVolunteerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
