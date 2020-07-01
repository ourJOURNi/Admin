import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reported-archive',
  templateUrl: './reported-archive.component.html',
  styleUrls: ['./reported-archive.component.scss']
})
export class ReportedArchiveComponent implements OnInit {

  allReportedComments = [];

  constructor(
    private posts: PostsService,
    public dialog: MatDialog,
    private router: Router
    ) { }

    ngOnInit() {
      this.posts.getReportedCommentsArchive().subscribe(
        comments => {

          const commentsArray = Object.values(comments);
          this.posts.reportedArchiveComments$.next(commentsArray);

          // Subscribe to Posts Subject in Posts Service for Real time updates
          this.posts.reportedArchiveComments$.subscribe(data => {
          this.allReportedComments = data;
          console.log(this.allReportedComments);
        });
        }
      );
    }

    goBack() {
      console.log('Going back to cali');
      this.router.navigate(['dashboard']);
    }

}
