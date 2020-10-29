import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentSlotDialogComponent } from './delete-student-slot-dialog.component';

describe('DeleteStudentSlotDialogComponent', () => {
  let component: DeleteStudentSlotDialogComponent;
  let fixture: ComponentFixture<DeleteStudentSlotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStudentSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
