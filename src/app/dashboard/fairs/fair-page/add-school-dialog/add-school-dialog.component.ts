import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FairsService } from 'src/app/services/fairs.service';


@Component({
  selector: 'app-add-school-dialog',
  templateUrl: './add-school-dialog.component.html',
  styleUrls: ['./add-school-dialog.component.scss']
})
export class AddSchoolDialogComponent implements OnInit {

  constructor(
    private fairs: FairsService) { }

  ngOnInit() {
  }

  addSchool() {
    console.log('Adding School');

  }

}
