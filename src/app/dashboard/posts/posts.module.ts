import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { DeletePostDialogComponent } from './delete-post-dialog/delete-post-dialog.component';

import { PostsRoutingModule } from './posts-routing.module';
import { ReportedComponent } from './reported/reported.component';
import { VerifyComponent } from './verify/verify.component';


@NgModule({
  declarations: [DeletePostDialogComponent, ReportedComponent, VerifyComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    DeletePostDialogComponent
  ]
})
export class PostsModule { }
