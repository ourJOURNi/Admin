import { Component, OnInit, Inject } from '@angular/core';
import { MentorsService } from '../../../services/mentors.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-mentor-dialog',
  templateUrl: './delete-mentor-dialog.component.html',
  styleUrls: ['./delete-mentor-dialog.component.scss']
})
export class DeleteMentorDialogComponent implements OnInit {

  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  title: string;
  description: string;
  photo: string;

  constructor(
    private mentors: MentorsService,
    private dialogRef: MatDialogRef<DeleteMentorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
    this.phone = data.phone;
    this.title = data.title;
    this.description = data.description;
    this.photo = data.photo;
  }

  ngOnInit() {

  }

  delete(id: any) {
    this.mentors.deleteMentor(id).subscribe(data => {
      this.mentors.getMentors().subscribe(data => {
        let mentorsArray = Object.values(data);
        this.mentors.mentorsSubject.next(mentorsArray);
      });
    });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
