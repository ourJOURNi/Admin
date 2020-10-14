import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { FairsService } from 'src/app/services/fairs.service';



@Component({
  selector: 'app-fair-page',
  templateUrl: './fair-page.component.html',
  styleUrls: ['./fair-page.component.scss']
})
export class FairPageComponent implements OnInit {
  id: string;
  fair;
  title: any;
  studentsBySchool;
  chaperonesBySchool;
  chaperones;
  partners;
  volunteers;
  allStudents;
  allLunches;
  panelOpenState = false;
  allStudentsClean: any[];

  constructor(
    private router: Router,
    private fairs: FairsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
    console.log(id);

    this.fairs.getFair(id).subscribe(
      fair => {
      const fairArray = Object.values(fair['fair']);
      const studentsBySchool = Object.values(fair['studentsBySchool']);
      const chaperonesBySchool = Object.values(fair['chaperonesBySchool']);

      for (const fair of fairArray) {
        fair['date'] = format( new Date(fair['date']), 'MMMM dd, yyyy');
        fair['time'] = format( new Date(fair['date']), 'hh:mm a');
      }

      this.fair = fairArray[0];
      this.studentsBySchool = studentsBySchool;
      this.chaperonesBySchool = chaperonesBySchool;
      this.partners = this.fair.partners;

      console.log(this.fair);
      console.log('Students sorted by each school - Chaperones & Students\n');
      console.log(studentsBySchool);
      console.log('Chaperones sorted by each school - Chaperones & Students\n');
      console.log(chaperonesBySchool);
      console.log('Partners\n');
      console.log(this.partners);

      console.log('All students combined');
      let allStudents = [].concat.apply([], studentsBySchool);
      let allStudentsClean = [];

      allStudents.filter( student => {
        if (student.grade) {
          allStudentsClean.push(student);
        }
      });
      console.log(allStudentsClean);
      this.allStudentsClean = allStudentsClean;

      console.log('All lunches fron all schools combined combined');
      let allLunches = [];
      allStudents.filter( student => {
        if (student.lunch) {
          allLunches.push(student.lunch);
        }
      });
      console.log(allLunches);
      this.allLunches = allLunches;


      // this.fairs.fairsSubject.next(fairsArray.reverse());

      // // Subscribe to Fairs Subject in Fairs Service for Real time update changes
      // this.fairs.fairsSubject.subscribe(data => {
      //   this.allFairs = data.reverse();
      // });
    });
  }

  back() {
    console.log('Attempting navigation to fairs');
    this.router.navigate(['dashboard']);
  }

}
