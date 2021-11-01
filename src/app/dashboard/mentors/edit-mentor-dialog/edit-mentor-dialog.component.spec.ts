import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMentorDialogComponent } from './edit-mentor-dialog.component';

describe('EditMentorDialogComponent', () => {
  let component: EditMentorDialogComponent;
  let fixture: ComponentFixture<EditMentorDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMentorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
