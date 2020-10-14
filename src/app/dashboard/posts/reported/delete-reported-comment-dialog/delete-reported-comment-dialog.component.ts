import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PostsService } from '../../../../services/posts.service';


@Component({
  selector: 'app-delete-reported-comment-dialog',
  templateUrl: './delete-reported-comment-dialog.component.html',
  styleUrls: ['./delete-reported-comment-dialog.component.scss']
})
export class DeleteReportedCommentDialogComponent implements OnInit {

  postID;
  commentID;
  commentContents;
  reportedUserEmail;
  reportedUserName;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<DeleteReportedCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.postID = data.postID;
      this.commentID = data.commentID;
      this.reportedUserEmail = data.reportedUserEmail;
      this.reportedUserName = data.reportedUserName;
      this.commentContents = data.commentContents;
    }

  ngOnInit() {
  }

  delete() {
    this.posts.deleteReportedComment(this.postID, this.commentID).subscribe(data => {
      this.posts.getReportedComments().subscribe(data => {
        let commentsArray = Object.values(data);
        this.posts.posts$.next(commentsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
