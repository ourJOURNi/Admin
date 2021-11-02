import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-verify-dialog',
  templateUrl: './verify-dialog.component.html',
  styleUrls: ['./verify-dialog.component.scss']
})
export class VerifyDialogComponent implements OnInit {

  id;
  date;
  post;
  creatorEmail;
  creatorName;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<VerifyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id,
      this.creatorEmail = data.creatorEmail;
      this.creatorName = data.creatorName;
      this.post = data.post;
      this.date = data.date; }

  ngOnInit() {
  }

  async verify(id) {
    await this.posts.verify(id).subscribe(
      posts => {
        let verifiedPosts = Object.values(posts);
        this.posts.postToBeVerified$.next(verifiedPosts);
      }
    );
    await this.dialogRef.close();

    console.log('This post has been verified and added to Post Collection');
  }
  close() {
    this.dialogRef.close();
  }




}
