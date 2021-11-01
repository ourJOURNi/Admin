import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteFairDialogComponent } from './delete-fair-dialog.component';

describe('DeleteFairDialogComponent', () => {
  let component: DeleteFairDialogComponent;
  let fixture: ComponentFixture<DeleteFairDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
