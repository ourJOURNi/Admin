import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteReportedCommentDialogComponent } from '../reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component';
import { SeenCommentDialogComponent } from '../reported/seen-comment-dialog/seen-comment-dialog.component';


@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.scss']
})
export class ReportedComponent implements OnInit {
  allReportedComments;

  constructor(
    private posts: PostsService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.posts.getReportedComments().subscribe(
      posts => {
        this.allReportedComments = Object.values(posts).reverse();
        // console.log(posts);
      }
    );
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

  reportedArchives() {
    this.router.navigate(['reported-archive']);
  }

  openDeleteReportedCommentDialog(data) {
    const dialogConfig = new MatDialogConfig();

    console.log(data);

    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';

    dialogConfig.data = {
      postID: data._id,
      commentID: data.commentID,
      commentContents: data.commentContents,
      reportedUserEmail: data.reportedUserEmail,
      reportedUserName: data.reportedUserName
  };

    this.dialog.open(DeleteReportedCommentDialogComponent, dialogConfig);

  }

  openSeenReportedCommentDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      postID: data._id,
      commentID: data.commentID,
      commentContents: data.commentContents,
      reportedUserEmail: data.reportedUserEmail,
      reportedUserName: data.reportedUserName
  };

    this.dialog.open(SeenCommentDialogComponent, dialogConfig);

  }

}
