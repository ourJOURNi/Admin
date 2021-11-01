import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddVolunteerDialogComponent } from './add-volunteer-dialog.component';

describe('AddVolunteerDialogComponent', () => {
  let component: AddVolunteerDialogComponent;
  let fixture: ComponentFixture<AddVolunteerDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolunteerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolunteerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
