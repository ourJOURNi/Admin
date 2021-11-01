import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddMentorDialogComponent } from './add-mentor-dialog.component';

describe('AddMentorDialogComponent', () => {
  let component: AddMentorDialogComponent;
  let fixture: ComponentFixture<AddMentorDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMentorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
