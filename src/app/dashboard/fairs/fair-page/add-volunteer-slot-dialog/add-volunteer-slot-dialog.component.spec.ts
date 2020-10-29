import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolunteerSlotDialogComponent } from './add-volunteer-slot-dialog.component';

describe('AddVolunteerSlotDialogComponent', () => {
  let component: AddVolunteerSlotDialogComponent;
  let fixture: ComponentFixture<AddVolunteerSlotDialogComponent>;

  beforeEach(async(() => {
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
