import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteReportedCommentDialogComponent } from './delete-reported-comment-dialog.component';

describe('DeleteReportedCommentDialogComponent', () => {
  let component: DeleteReportedCommentDialogComponent;
  let fixture: ComponentFixture<DeleteReportedCommentDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReportedCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReportedCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
