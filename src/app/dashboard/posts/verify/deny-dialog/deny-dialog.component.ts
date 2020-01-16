
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-deny-dialog',
  templateUrl: './deny-dialog.component.html',
  styleUrls: ['./deny-dialog.component.scss']
})
export class DenyDialogComponent implements OnInit {
  id;
  date;
  post;
  creatorEmail;
  creatorName;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<DenyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id;
      this.creatorEmail = data.creatorEmail;
      this.creatorName = data.creatorName;
      this.post = data.post;
      this.date = data.date;

    }

  ngOnInit() {
  }

  async deny(id) {
    await this.posts.deny(id).subscribe();
    await this.dialogRef.close();

    console.log('This post has been denied and added to Denied Post Collection');
  }

  close() {
    this.dialogRef.close();
  }


}
