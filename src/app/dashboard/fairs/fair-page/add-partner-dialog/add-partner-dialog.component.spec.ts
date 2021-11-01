import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPartnerDialogComponent } from './add-partner-dialog.component';

describe('AddPartnerDialogComponent', () => {
  let component: AddPartnerDialogComponent;
  let fixture: ComponentFixture<AddPartnerDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
