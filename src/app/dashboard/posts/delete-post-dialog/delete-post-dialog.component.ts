import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.scss']
})
export class DeletePostDialogComponent implements OnInit {

  id: any;
  post: any;
  creatorEmail: any;
  creatorName: string;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<DeletePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id;
      this.post = data.post;
      this.creatorName = data.creatorName;
      this.creatorEmail = data.creatorEmail;
    }

  ngOnInit() {
  }

  delete(id) {
    console.log(id);
    this.posts.deletePost(id).subscribe(data => {
      this.posts.getPosts().subscribe(data => {
        let postsArray = Object.values(data);
        this.posts.posts$.next(postsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
