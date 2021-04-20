import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-seen-comment-dialog',
  templateUrl: './seen-comment-dialog.component.html',
  styleUrls: ['./seen-comment-dialog.component.scss']
})
export class SeenCommentDialogComponent implements OnInit {

  postID;
  commentID;
  reportedUID;
  commentContents;
  reportedUserEmail;
  reportedUserName;
  reportedUserProfilePicture;
  reportReason;
  userEmail;
  userFullname;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<SeenCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log(data)
      this.postID = data.postID;
      this.commentID = data.commentID;
      this.reportedUID = data.reportedUID;
      this.reportedUserEmail = data.reportedUserEmail;
      this.reportedUserName = data.reportedUserName;
      this.reportedUserProfilePicture = data.reportedUserProfilePicture;
      this.reportReason = data.reportReason;
      this.commentContents = data.commentContents;
      this.userEmail = data.userEmail;
      this.userFullname = data.userFullname;
    }

  ngOnInit() {
    console.log(this.reportedUserProfilePicture)
  }

  close() {
    this.dialogRef.close();
  }

  reportedCommentsArchive() {
    return this.posts.archieveReportedComment({
      postID: this.postID,
      commentID: this.commentID,
      reportedUID: this.reportedUID,
      commentContents: this.commentContents,
      reportedUserEmail: this.reportedUserEmail,
      reportedUserName: this.reportedUserName,
      reportedUserProfilePicture: this.reportedUserProfilePicture,
      reportReason: this.reportReason,
      userEmail: this.userEmail,
      userFullname: this.userFullname
    })
      .subscribe(
      data => {
        console.log(data);
        this.posts.reportedPosts$.next(Object.values(data));
        console.log('create reported comments archieve');
        this.dialogRef.close();
      });
  }

}
