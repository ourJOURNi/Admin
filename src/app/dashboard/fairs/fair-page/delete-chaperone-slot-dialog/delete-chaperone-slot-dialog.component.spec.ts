import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteChaperoneSlotDialogComponent } from './delete-chaperone-slot-dialog.component';

describe('DeleteChaperoneSlotDialogComponent', () => {
  let component: DeleteChaperoneSlotDialogComponent;
  let fixture: ComponentFixture<DeleteChaperoneSlotDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChaperoneSlotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChaperoneSlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
