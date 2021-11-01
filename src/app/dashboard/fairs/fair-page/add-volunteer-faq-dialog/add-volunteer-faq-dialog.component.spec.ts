import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddVolunteerFaqDialogComponent } from './add-volunteer-faq-dialog.component';

describe('AddVolunteerFaqDialogComponent', () => {
  let component: AddVolunteerFaqDialogComponent;
  let fixture: ComponentFixture<AddVolunteerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolunteerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolunteerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
