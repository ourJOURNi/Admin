import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteCommentDialogComponent } from './delete-comment-dialog.component';

describe('DeleteCommentDialogComponent', () => {
  let component: DeleteCommentDialogComponent;
  let fixture: ComponentFixture<DeleteCommentDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
