import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeletePartnerFaqDialogComponent } from './delete-partner-faq-dialog.component';

describe('DeletePartnerFaqDialogComponent', () => {
  let component: DeletePartnerFaqDialogComponent;
  let fixture: ComponentFixture<DeletePartnerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartnerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartnerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
