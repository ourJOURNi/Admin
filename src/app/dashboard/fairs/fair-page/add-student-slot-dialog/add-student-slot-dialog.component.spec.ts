import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddStudentSlotDialogComponent } from './add-student-slot-dialog.component';

describe('AddStudentSlotDialogComponent', () => {
  let component: AddStudentSlotDialogComponent;
  let fixture: ComponentFixture<AddStudentSlotDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
