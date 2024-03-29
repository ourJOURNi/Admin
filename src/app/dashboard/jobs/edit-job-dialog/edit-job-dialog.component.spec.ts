import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditJobDialogComponent } from './edit-job-dialog.component';

describe('EditJobDialogComponent', () => {
  let component: EditJobDialogComponent;
  let fixture: ComponentFixture<EditJobDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
