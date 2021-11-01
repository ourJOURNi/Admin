import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditFairDialogComponent } from './edit-fair-dialog.component';

describe('EditFairDialogComponent', () => {
  let component: EditFairDialogComponent;
  let fixture: ComponentFixture<EditFairDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
