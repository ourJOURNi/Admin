import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVolunteerSlotDialogComponent } from './delete-volunteer-slot-dialog.component';

describe('DeleteVolunteerSlotDialogComponent', () => {
  let component: DeleteVolunteerSlotDialogComponent;
  let fixture: ComponentFixture<DeleteVolunteerSlotDialogComponent>;

  beforeEach(async(() => {
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
