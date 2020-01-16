import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seen-comment-dialog',
  templateUrl: './seen-comment-dialog.component.html',
  styleUrls: ['./seen-comment-dialog.component.scss']
})
export class SeenCommentDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
