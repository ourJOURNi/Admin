import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFairDialogComponent } from './add-fair-dialog.component';

describe('AddFairDialogComponent', () => {
  let component: AddFairDialogComponent;
  let fixture: ComponentFixture<AddFairDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
