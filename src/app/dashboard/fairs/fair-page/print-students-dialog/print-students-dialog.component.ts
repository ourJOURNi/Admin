import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-print-students-dialog',
  templateUrl: './print-students-dialog.component.html',
  styleUrls: ['./print-students-dialog.component.scss']
})
export class PrintStudentsDialogComponent implements OnInit {
  date = Date.now();
  schools;

  constructor(
    private dialogRef: MatDialogRef<PrintStudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    console.log(typeof this.data);
    this.schools = Object.create(this.data);

    for (let school of this.schools) {
      school[0].waitlisted = '';
      school[0].email = '';
      school[0].gender = '';
      school[0].grade = '';
      school[0].lunch = '';
      school[0].phone = '';
     }
  }

  close() {
    this.dialogRef.close();
  }

  downloadFile(data, filename = `student-list-${this.date}`) {
    // tslint:disable-next-line: max-line-length
    let reducedData = [].concat.apply([], data);

    let csvData = this.ConvertToCSV(reducedData, ['name', 'waitlisted', 'email', 'grade', 'phone', 'gender', 'lunch']);
    // console.log(csvData);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement('a');
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      // if Safari open in new window to save file with random filename.
        dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray, headerList) {
     let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'No.,';

     // tslint:disable-next-line: forin
     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i + 1) + '';
         // tslint:disable-next-line: forin
         for (let index in headerList) {
            let head = headerList[index];
            line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
  }


}
