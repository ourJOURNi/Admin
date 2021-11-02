import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-print-chaperones-dialog',
  templateUrl: './print-chaperones-dialog.component.html',
  styleUrls: ['./print-chaperones-dialog.component.scss']
})
export class PrintChaperonesDialogComponent implements OnInit {
  date = Date.now();
  chaperones;

  constructor(
    private dialogRef: MatDialogRef<PrintChaperonesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
    this.chaperones = Object.create(this.data);

    for (let chaperone of this.chaperones) {
      chaperone[0].waitlisted = '';
      chaperone[0].email = '';
      chaperone[0].gender = '';
      chaperone[0].grade = '';
      chaperone[0].lunch = '';
      chaperone[0].phone = '';
     }
  }

  close() {
    this.dialogRef.close();
  }

  downloadFile(data, filename = `chaperone-list`) {
    // tslint:disable-next-line: max-line-length
    let reducedData = [].concat.apply([], data);

    let csvData = this.ConvertToCSV(reducedData, ['name', 'email', 'phone', 'gender', 'lunch']);
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
