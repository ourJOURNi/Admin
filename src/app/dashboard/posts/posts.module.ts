import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { PostsRoutingModule } from './posts-routing.module';
import { VerifyRoutingModule } from './verify/verify-routing.module';
import { ReportedComponent } from './reported/reported.component';
import { VerifyComponent } from './verify/verify.component';

import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';
import { FollowersDialogComponent } from './followers-dialog/followers-dialog.component';
import { CommentsDialogComponent } from './comments-dialog/comments-dialog.component';
import { DeleteCommentDialogComponent } from './delete-comment-dialog/delete-comment-dialog.component';
import { DeleteReportedCommentDialogComponent } from './reported/delete-reported-comment-dialog/delete-reported-comment-dialog.component';
import { SeenCommentDialogComponent } from './reported/seen-comment-dialog/seen-comment-dialog.component';
import { VerifyDialogComponent } from './verify/verify-dialog/verify-dialog.component';
import { DenyDialogComponent } from './verify/deny-dialog/deny-dialog.component';
import { DeniedComponent } from './verify/denied/denied.component';
import { ReportedArchiveComponent } from './reported/reported-archive/reported-archive.component';



@NgModule({
  declarations: [
    DeletePostDialogComponent,
    ReportedComponent,
    VerifyComponent,
    FollowersDialogComponent,
    CommentsDialogComponent,
    DeleteCommentDialogComponent,
    DeleteReportedCommentDialogComponent,
    SeenCommentDialogComponent,
    VerifyDialogComponent,
    DenyDialogComponent,
    DeniedComponent,
    ReportedArchiveComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    VerifyRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    DeletePostDialogComponent,
    FollowersDialogComponent,
    CommentsDialogComponent,
    DeleteCommentDialogComponent,
    DeleteReportedCommentDialogComponent,
    SeenCommentDialogComponent,
    VerifyDialogComponent,
    DenyDialogComponent
  ]
})
export class PostsModule { }
