import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FairsService } from '../../../services/fairs.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-add-fair-dialog',
  templateUrl: './add-fair-dialog.component.html',
  styleUrls: ['./add-fair-dialog.component.scss']
})
export class AddFairDialogComponent implements OnInit {

  addFairForm: FormGroup;

  constructor(
    private fairs: FairsService,
    private dialogRef: MatDialogRef<AddFairDialogComponent>,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.addFairForm = this.formBuilder.group({
        title: ['Youth Tech Exploration', Validators.required],
        organizer: ['Journi', Validators.required],
        addressOne: ['777 Main', Validators.required],
        addressTwo: ['', Validators.required],
        city: ['Detroit', Validators.required],
        state: ['MI', Validators.required],
        zip: ['48202', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required],
        description: ['description', Validators.required],
        photo: ['photo', Validators.required],
      });
    }

    add(fair) {
      console.log('Adding fair...');
      fair.datedCreated = Date.now();
      this.fairs.addFair(fair).subscribe(data => {
        this.fairs.getFairs().subscribe(fairs => {
          const fairsArray = Object.values(fairs);

          for (const fair of fairsArray) {
            fair.date = format( new Date(fair.date), 'MMMM-dd-yyyy');
            fair.time = format( new Date(fair.date), 'hh:mm a');
          }
          this.fairs.fairsSubject.next(fairsArray.reverse());
          this.dialogRef.close();
        });
      });
    }

    close() {
      this.dialogRef.close();
    }

}
