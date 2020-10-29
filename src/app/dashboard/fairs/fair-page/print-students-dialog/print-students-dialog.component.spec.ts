import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStudentsDialogComponent } from './print-students-dialog.component';

describe('PrintStudentsDialogComponent', () => {
  let component: PrintStudentsDialogComponent;
  let fixture: ComponentFixture<PrintStudentsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintStudentsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStudentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
