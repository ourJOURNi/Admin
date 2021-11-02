import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteReportedCommentDialogComponent } from '../reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component';
import { SeenCommentDialogComponent } from '../reported/seen-comment-dialog/seen-comment-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.scss']
})
export class ReportedComponent implements OnInit {
  allReportedComments;
  allReportedComments$ = new BehaviorSubject(null);


  constructor(
    private posts: PostsService,
    private router: Router,
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.posts.getReportedComments().subscribe(
      posts => {
        this.posts.reportedPosts$.next(Object.values(posts));
        this.posts.reportedPosts$.subscribe(
          data => {
            this.allReportedComments = Object.values(data);
          })
      }
    );
  }
  goBack() {
    this.location.back()
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
      postID: data.postID,
      commentID: data.commentID,
      reportedUID: data.reportedUID
  };

    this.dialog.open(DeleteReportedCommentDialogComponent, dialogConfig);

  }

  openSeenReportedCommentDialog(data) {
    const dialogConfig = new MatDialogConfig();
    console.log(data)

    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      postID: data._id,
      commentID: data.commentID,
      reportedUID: data.reportedUID,
      commentContents: data.commentContents,
      reportedUserEmail: data.reportedUserEmail,
      reportedUserName: data.reportedUserName,
      reportedUserProfilePicture: data.reportedUserProfilePicture,
      reportReason: data.reportReason,
      userEmail: data.userEmail,
      userFullname: data.userFullname
  };

    this.dialog.open(SeenCommentDialogComponent, dialogConfig);

  }

}
