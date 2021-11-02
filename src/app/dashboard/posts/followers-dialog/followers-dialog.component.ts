import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from 'src/app/services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followers-dialog',
  templateUrl: './followers-dialog.component.html',
  styleUrls: ['./followers-dialog.component.scss']
})
export class FollowersDialogComponent implements OnInit {
  id: any;
  followers;
  getStudents$: Subscription;
  finalFollowers;

  constructor(
    private posts: PostsService,
    private studentsService: StudentsService,
    private dialogRef: MatDialogRef<FollowersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id,
    this.followers = data.followers;
  }

  ngOnInit() {
    // console.log(this.followers);
    this.getStudents$ = this.studentsService.getStudents().subscribe(
      data => {
        // console.log(data);
        let users = Object.values(data);
        let collectUsers = [];
        users.forEach(user => {
          // console.log(user.email)
          // Username
          // Profile Picture
          collectUsers.push({email: user.email, name: user.fullName, photo: user.profilePicture})
        })

        let finalFollowers = [];
        collectUsers.forEach(user => {
          this.followers.forEach(follower => {
            if(user.email === follower) {
              finalFollowers.push(user);
            }
          });
        })
        console.log(finalFollowers);
        return this.finalFollowers = finalFollowers;
      }
    )
  }

  close() {
    this.dialogRef.close();
  }

}
