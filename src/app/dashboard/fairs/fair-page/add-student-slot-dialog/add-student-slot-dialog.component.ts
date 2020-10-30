import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { FairsService } from 'src/app/services/fairs.service';


@Component({
  selector: 'app-add-student-slot-dialog',
  templateUrl: './add-student-slot-dialog.component.html',
  styleUrls: ['./add-student-slot-dialog.component.scss']
})
export class AddStudentSlotDialogComponent implements OnInit, OnDestroy {
  id: string;
  addAgendaItemForm: FormGroup;
  studentAgendaSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddStudentSlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.id;
    }
  ngOnDestroy(): void {
    this.studentAgendaSubscription.unsubscribe();
  }

  ngOnInit() {
    this.addAgendaItemForm = this.formBuilder.group({
      time: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  addStudentAgendaItem() {
    const timeValue = this.addAgendaItemForm.controls.time.value;
    const title = this.addAgendaItemForm.controls.title.value;
    let formattedTime = null;

    // Add AM or PM to time value
    function onTimeChange(time) {
      const timeSplit = time.split(':');
      let hours = time.split(':');
      let minutes = time.split(':');
      let meridian = time.split(':');
      hours = timeSplit[0];
      minutes = timeSplit[1];
      if (hours > 12) {
          meridian = 'PM';
          hours -= 12;
        } else if (hours < 12) {
          meridian = 'AM';
          if (hours === 0) {
            hours = 12;
          }
        } else {
          meridian = 'PM';
        }

      formattedTime = hours + ':' + minutes + ' ' + meridian;
    }

    onTimeChange(timeValue);

    if (!timeValue) {
      console.log('There was no time value!');
    }
    if (!title) {
      console.log('There was no title!');
    }
    if (title && timeValue) {
      console.log('There was a title and time value.');
      this.studentAgendaSubscription = this.fairs.addStudentAgendaItem(this.id, formattedTime, title).subscribe(
        data => {
          console.log(data);
          this.close();
          this.openSnackBarSuccess();
          this.fairs.studentAgenda$.next(Object.values(data));
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }

  openSnackBarSuccess() {
    this.snackBar.open('You have Added an Agenda Item', 'Close', {
      duration: 2000,
    });
  }


}
