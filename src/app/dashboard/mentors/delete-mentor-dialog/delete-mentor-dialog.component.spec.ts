import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMentorDialogComponent } from './delete-mentor-dialog.component';

describe('DeleteMentorDialogComponent', () => {
  let component: DeleteMentorDialogComponent;
  let fixture: ComponentFixture<DeleteMentorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMentorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
