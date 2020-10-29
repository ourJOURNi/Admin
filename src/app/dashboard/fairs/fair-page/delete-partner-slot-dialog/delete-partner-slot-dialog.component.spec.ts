import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartnerSlotDialogComponent } from './delete-partner-slot-dialog.component';

describe('DeletePartnerSlotDialogComponent', () => {
  let component: DeletePartnerSlotDialogComponent;
  let fixture: ComponentFixture<DeletePartnerSlotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartnerSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartnerSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
