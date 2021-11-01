import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteVolunteerSlotDialogComponent } from './delete-volunteer-slot-dialog.component';

describe('DeleteVolunteerSlotDialogComponent', () => {
  let component: DeleteVolunteerSlotDialogComponent;
  let fixture: ComponentFixture<DeleteVolunteerSlotDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVolunteerSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVolunteerSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
