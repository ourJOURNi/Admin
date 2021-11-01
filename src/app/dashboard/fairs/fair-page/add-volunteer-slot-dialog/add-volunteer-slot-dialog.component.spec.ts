import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddVolunteerSlotDialogComponent } from './add-volunteer-slot-dialog.component';

describe('AddVolunteerSlotDialogComponent', () => {
  let component: AddVolunteerSlotDialogComponent;
  let fixture: ComponentFixture<AddVolunteerSlotDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolunteerSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolunteerSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
