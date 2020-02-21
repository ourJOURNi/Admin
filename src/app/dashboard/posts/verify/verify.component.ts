import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { VerifyDialogComponent } from '../verify/verify-dialog/verify-dialog.component';
import { DenyDialogComponent } from '../verify/deny-dialog/deny-dialog.component';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  allUnverifiedPosts;

  constructor(
    private posts: PostsService,
    private router: Router,
    public dialog: MatDialog
    ) { }

    ngOnInit() {
      this.posts.getUnverifiedPosts().subscribe(
        posts => {
          this.allUnverifiedPosts = posts;
          console.log(this.allUnverifiedPosts);
        }
      );
    }

    goBack() {
      console.log('Going back to cali');
      this.router.navigate(['dashboard']);
    }

    verifyYesDialog(data) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '800px';
      dialogConfig.height = 'auto';
      dialogConfig.autoFocus = false;

      dialogConfig.data = {
        id: data._id,
        creatorName: data.creatorName,
        creatorEmail: data.creatorEmail,
        post: data.post,
        date: data.date
    };

      this.dialog.open(VerifyDialogComponent, dialogConfig);

    }

    verifyNoDialog(data) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '800px';
      dialogConfig.height = 'auto';
      dialogConfig.autoFocus = false;

      dialogConfig.data = {
        id: data._id,
        creatorName: data.creatorName,
        creatorEmail: data.creatorEmail,
        post: data.post,
        date: data.date
    };

      this.dialog.open(DenyDialogComponent, dialogConfig);

    }

}
