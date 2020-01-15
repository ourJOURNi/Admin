import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts = [];

  constructor(
    private posts: PostsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.posts.getPosts().subscribe(
      posts => {

        const postsArray = Object.values(posts);
        this.posts.posts$.next(postsArray);

        // Subscribe to Posts Subject in Posts Service for Real time updates
        this.posts.posts$.subscribe(data => {
        this.allPosts = data;
        console.log(this.allPosts);
      });
      }
    );
  }

  reportedPage() {
    console.log('Going to reported Page');
  }

  verifyPage() {
    console.log('Going to verified Page');
  }

  openDeleteDialog(data) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = {
      id: data._id,
      creatorEmail: data.creatorEmail,
      creatorName: data.creatorName,
      post: data.post
  };

    this.dialog.open(DeletePostDialogComponent, dialogConfig);
  }

}
