import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeletePartnerDialogComponent } from './delete-partner-dialog.component';

describe('DeletePartnerDialogComponent', () => {
  let component: DeletePartnerDialogComponent;
  let fixture: ComponentFixture<DeletePartnerDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
