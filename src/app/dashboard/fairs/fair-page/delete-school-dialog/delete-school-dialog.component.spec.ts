import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSchoolDialogComponent } from './delete-school-dialog.component';

describe('DeleteSchoolDialogComponent', () => {
  let component: DeleteSchoolDialogComponent;
  let fixture: ComponentFixture<DeleteSchoolDialogComponent>;

  beforeEach(async(() => {
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
