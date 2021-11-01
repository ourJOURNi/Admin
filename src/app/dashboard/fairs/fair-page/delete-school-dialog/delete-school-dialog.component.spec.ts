import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteSchoolDialogComponent } from './delete-school-dialog.component';

describe('DeleteSchoolDialogComponent', () => {
  let component: DeleteSchoolDialogComponent;
  let fixture: ComponentFixture<DeleteSchoolDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSchoolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
