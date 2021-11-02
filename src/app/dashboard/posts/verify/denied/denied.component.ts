import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.scss']
})
export class DeniedComponent implements OnInit {

  allDeniedPosts = [];

  constructor(
    private posts: PostsService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {
    this.posts.getDeniedPosts().subscribe(
      posts => {

        const postsArray = Object.values(posts);
        this.posts.deniedPosts$.next(postsArray);

        // Subscribe to Posts Subject in Posts Service for Real time updates
        this.posts.deniedPosts$.subscribe(data => {
        this.allDeniedPosts = data.reverse();

        for (const denied of this.allDeniedPosts) {
          denied.date = format( new Date(denied.date), 'MMMM dd, yyyy hh:mm a');
        }

        console.log(this.allDeniedPosts);
      });
      }
    );
  }

  goBack() {
    console.log('Going back to cali');
    this.router.navigate(['verify']);
  }

}
