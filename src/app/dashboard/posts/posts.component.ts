import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';
import { FollowersDialogComponent } from './followers-dialog/followers-dialog.component';
import { CommentsDialogComponent } from './comments-dialog/comments-dialog.component';

import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts = [];
  reportedPost = [];
  unverifiedPost;

  constructor(
    private posts: PostsService,
    public dialog: MatDialog,
    private router: Router,
    ) { }

  ngOnInit() {
    this.posts.getPosts().subscribe(
      posts => {

        const postsArray = Object.values(posts).reverse();
        this.posts.posts$.next(postsArray);

        // Subscribe to Posts Subject in Posts Service for Real time updates
        this.posts.posts$.subscribe(data => {
        this.allPosts = data;

        for (const post of this.allPosts) {
          post.date = format( new Date(post.date), 'MMMM dd, yyyy hh:mm a');
        }

        console.log(this.allPosts);
      });
      }
    );

    this.posts.getReportedComments().subscribe(
      posts => {
        this.reportedPost = Object.values(posts);
        console.log('reported: ' + this.reportedPost);
      }
    );

    this.posts.getUnverifiedPosts().subscribe(
      posts => {
        this.unverifiedPost = Object.values(posts);
      }
    );
  }

  test() {
    console.log('test');
  }

  reportedPage() {
    console.log('Going to reported Page');
    this.router.navigate(['reported']);
  }

  verifyPage() {
    console.log('Going to verified Page');
    this.router.navigate(['verify']);
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';

    dialogConfig.data = {
      id: data._id,
  };

    this.dialog.open(DeletePostDialogComponent, dialogConfig);
  }

  openFollowersDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.height = '800px';

    dialogConfig.data = {
      id: data._id,
      followers: data.followers
  };

    this.dialog.open(FollowersDialogComponent, dialogConfig);

  }

  openCommentsDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '800px';
    dialogConfig.height = '800px';
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      id: data._id,
      comments: data.comments
  };

    this.dialog.open(CommentsDialogComponent, dialogConfig);

  }

}
