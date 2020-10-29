import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartnerFaqDialogComponent } from './delete-partner-faq-dialog.component';

describe('DeletePartnerFaqDialogComponent', () => {
  let component: DeletePartnerFaqDialogComponent;
  let fixture: ComponentFixture<DeletePartnerFaqDialogComponent>;

  beforeEach(async(() => {
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
