import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaperoneSlotDialogComponent } from './add-chaperone-slot-dialog.component';

describe('AddChaperoneSlotDialogComponent', () => {
  let component: AddChaperoneSlotDialogComponent;
  let fixture: ComponentFixture<AddChaperoneSlotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChaperoneSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaperoneSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
