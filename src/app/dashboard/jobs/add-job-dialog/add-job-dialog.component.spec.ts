import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddJobDialogComponent } from './add-job-dialog.component';

describe('AddJobDialogComponent', () => {
  let component: AddJobDialogComponent;
  let fixture: ComponentFixture<AddJobDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
