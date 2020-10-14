import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-seen-comment-dialog',
  templateUrl: './seen-comment-dialog.component.html',
  styleUrls: ['./seen-comment-dialog.component.scss']
})
export class SeenCommentDialogComponent implements OnInit {

  postID;
  commentID;
  commentContents;
  reportedUserEmail;
  reportedUserName;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<SeenCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.postID = data.postID;
      this.commentID = data.commentID;
      this.reportedUserEmail = data.reportedUserEmail;
      this.reportedUserName = data.reportedUserName;
      this.commentContents = data.commentContents;
    }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  reportedCommentsArchive() {
    console.log('create reported comments archieve');
    console.log('add was deleted boolean propety. in this case it would be set to false');
    this.dialogRef.close();
  }

}
