import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFairDialogComponent } from './add-fair-dialog.component';

describe('AddFairDialogComponent', () => {
  let component: AddFairDialogComponent;
  let fixture: ComponentFixture<AddFairDialogComponent>;

  beforeEach(async(() => {
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
