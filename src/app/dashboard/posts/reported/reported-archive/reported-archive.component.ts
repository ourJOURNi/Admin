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

  allReportedPosts = [];

  constructor(
    private comments: PostsService,
    public dialog: MatDialog,
    private router: Router
    ) { }

    ngOnInit() {
      this.comments.getReportedCommentsArchive().subscribe(
        comments => {

          const commentsArray = Object.values(comments);
          this.comments.deniedPosts$.next(commentsArray);

          // Subscribe to Posts Subject in Posts Service for Real time updates
          this.comments.deniedPosts$.subscribe(data => {
          this.allReportedPosts = data;
          console.log(this.allReportedPosts);
        });
        }
      );
    }

    goBack() {
      console.log('Going back to cali');
      this.router.navigate(['dashboard']);
    }

}
