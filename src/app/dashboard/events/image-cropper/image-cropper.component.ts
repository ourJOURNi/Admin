import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import Cropper from 'cropperjs';


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit, AfterViewInit {

  @ViewChild('image', { static: false }) imageElement: ElementRef;

  public imageDestination: string;
  private cropper: Cropper;
  uploadedPhotoURL;
  photo;

  constructor(
    private dialogRef: MatDialogRef<ImageCropperComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.photo = data.photo;
      console.log(data.photo);

}

public ngAfterViewInit() {
  this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      modal: true,
      scalable: true,
      aspectRatio: 1,
      // autoCropArea: 1,
      wheelZoomRatio: 0.8,
      viewMode: 2,
      center: true,
      // responsive: true,
      movable: true,
      minContainerWidth: 700,
      minContainerHeight: 200,
      zoomOnTouch: true,
      zoomOnWheel: true,
      crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL('image/png', 0.1);
      },
      cropend: () => {
        console.log('The crop ended');
      }
  });
}

public ngOnInit() {
  console.log(this.photo);

  // let cropperContainer = document.getElementsByClassName('cropper-container') as HTMLCollectionOf<HTMLElement>;
  // console.log(cropperContainer.item(1));

  window.addEventListener('touchstart', (e) => {
    console.log(e);
    e.stopPropagation();
    e.preventDefault(); //Most important
  })
  this.uploadedPhotoURL = this.photo;

  // Since I am using this Cropper in a Modal, it needs to
  // load AFTER the modal loads. SetTimeout was the solution here.
  setTimeout(() => {
    let cropperCanvas = document.getElementsByClassName('cropper-canvas')as HTMLCollectionOf<HTMLElement>;
    console.log(cropperCanvas);
    // The Canvas can be no bigger than the Container
    // cropperCanvas.item(0).style.maxHeight = '100px';
  }, 0);
}

  cancel() {
    this.dialogRef.close();
  }

  crop(imageDestination) {
    console.log('cropping');
    this.dialogRef.close()

  }
}
