import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartnerSlotDialogComponent } from './add-partner-slot-dialog.component';

describe('AddPartnerSlotDialogComponent', () => {
  let component: AddPartnerSlotDialogComponent;
  let fixture: ComponentFixture<AddPartnerSlotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
