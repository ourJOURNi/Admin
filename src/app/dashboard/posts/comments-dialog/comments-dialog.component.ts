import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DeleteCommentDialogComponent } from '../delete-comment-dialog/delete-comment-dialog.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-comments-dialog',
  templateUrl: './comments-dialog.component.html',
  styleUrls: ['./comments-dialog.component.scss']
})
export class CommentsDialogComponent implements OnInit {
  id;
  comments;

  constructor(
    private posts: PostsService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<CommentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id,
    this.comments = data.comments;
   }

  ngOnInit() {
    console.log(this.comments);

    for (const comment of this.comments) {
      comment.date = format( new Date(comment.date), 'MMMM dd, yyyy hh:mm a');
    }
  }

  close() {
    this.dialogRef.close();
  }

  openDeleteCommentDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '800px';
    dialogConfig.height = '400px';
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      postID: this.id,
      commentID: data._id,
      userFullName: data.userFullName,
      userEmail: data.userEmail,
      comment: data.comment,
      likes: data.likes
  };

    this.dialog.open(DeleteCommentDialogComponent, dialogConfig);

  }

}
