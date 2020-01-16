import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReportedCommentDialogComponent } from './delete-reported-comment-dialog.component';

describe('DeleteReportedCommentDialogComponent', () => {
  let component: DeleteReportedCommentDialogComponent;
  let fixture: ComponentFixture<DeleteReportedCommentDialogComponent>;

  beforeEach(async(() => {
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
