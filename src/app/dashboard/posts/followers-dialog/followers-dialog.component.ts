import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-followers-dialog',
  templateUrl: './followers-dialog.component.html',
  styleUrls: ['./followers-dialog.component.scss']
})
export class FollowersDialogComponent implements OnInit {
  id: any;
  followers;

  constructor(
    private posts: PostsService,
    private dialogRef: MatDialogRef<FollowersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id,
    this.followers = data.followers;
  }

  ngOnInit() {
    console.log(this.followers);
  }

  close() {
    this.dialogRef.close();
  }

}
