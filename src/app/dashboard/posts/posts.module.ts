import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';

import { PostsRoutingModule } from './posts-routing.module';
import { ReportedComponent } from './reported/reported.component';
import { VerifyComponent } from './verify/verify.component';
import { FollowersDialogComponent } from './followers-dialog/followers-dialog.component';
import { CommentsDialogComponent } from './comments-dialog/comments-dialog.component';
import { DeleteCommentDialogComponent } from './delete-comment-dialog/delete-comment-dialog.component';



@NgModule({
  declarations: [
    DeletePostDialogComponent,
    ReportedComponent,
    VerifyComponent,
    FollowersDialogComponent,
    CommentsDialogComponent,
    DeleteCommentDialogComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    DeletePostDialogComponent,
    FollowersDialogComponent,
    CommentsDialogComponent,
    DeleteCommentDialogComponent
  ]
})
export class PostsModule { }
