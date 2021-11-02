import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../../../services/posts.service';
import { CommentsDialogComponent } from '../comments-dialog/comments-dialog.component';



@Component({
  selector: 'app-delete-comment-dialog',
  templateUrl: './delete-comment-dialog.component.html',
  styleUrls: ['./delete-comment-dialog.component.scss']
})
export class DeleteCommentDialogComponent implements OnInit {

  postID;
  commentID;
  userFullName;
  userEmail;
  comment;
  likes;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<DeleteCommentDialogComponent>,
    private commentsDialogRef: MatDialogRef<CommentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.postID = data.postID;
    this.commentID = data.commentID;
    this.userFullName = data.userFullName;
    this.userEmail = data.userEmail;
    this.comment = data.comment;
    this.likes = data.likes;

    }

  ngOnInit() {

  }

  delete() {
    this.posts.deleteComment(this.postID, this.commentID).subscribe(data => {
      this.posts.getPosts().subscribe(data => {
        let postsArray = Object.values(data);
        this.posts.posts$.next(postsArray);
      });
    });
    this.dialogRef.close();
    this.commentsDialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }


}
