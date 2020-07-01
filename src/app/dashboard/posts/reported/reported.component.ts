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
        this.allReportedComments = posts['reportedComments'].reverse();
        console.log(this.allReportedComments);
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

    dialogConfig.width = '800px';
    dialogConfig.height = '800px';

    dialogConfig.data = {
      postID: data._id,
      commentID: data.commentID,
      comment: data.comment,
      reportedUserEmail: data.reportedUserEmail,
      reportedUserName: data.reportedUserName
  };

    this.dialog.open(DeleteReportedCommentDialogComponent, dialogConfig);

  }

  openSeenReportedCommentDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '800px';
    dialogConfig.height = '800px';
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      id: data._id,
      comments: data.comments
  };

    this.dialog.open(SeenCommentDialogComponent, dialogConfig);

  }

}
