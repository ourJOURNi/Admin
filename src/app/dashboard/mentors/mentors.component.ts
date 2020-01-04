import { Component, OnInit } from '@angular/core';
import { MentorsService } from '../../services/mentors.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteMentorDialogComponent } from '../mentors/delete-mentor-dialog/delete-mentor-dialog.component';
import { AddMentorDialogComponent } from '../mentors/add-mentor-dialog/add-mentor-dialog.component';
import { EditMentorDialogComponent } from '../mentors/edit-mentor-dialog/edit-mentor-dialog.component';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  allMentors = [];

  constructor(
    private mentors: MentorsService,
    public dialog: MatDialog) { }

    ngOnInit() {
      this.mentors.getMentors().subscribe(mentors => {

        const mentorsArray = Object.values(mentors);
        this.mentors.mentorsSubject.next(mentorsArray);

        // Subscribe to Jobs Subject in Jobs Service for Real time update changes
        this.mentors.mentorsSubject.subscribe(data => {
          this.allMentors = data;
          console.log(this.allMentors);
        });
      });
    }

    openDeleteDialog(data) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;

      dialogConfig.data = {
        id: data._id,
        name: data.name,
        email: data.email,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        phone: data.phone,
        title: data.title,
        description: data.description,
        photo: data.photo
    };

      this.dialog.open(DeleteMentorDialogComponent, dialogConfig);
    }

    openAddMentorDialog() {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;

      this.dialog.open(AddMentorDialogComponent, dialogConfig);

    }

    openEditMentorDialog(data) {
      console.log(data);
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;

      dialogConfig.data = {
        id: data._id,
        name: data.name,
        email: data.email,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        phone: data.phone,
        title: data.title,
        description: data.description,
        photo: data.photo
    };

      this.dialog.open(EditMentorDialogComponent, dialogConfig);

    }

}
