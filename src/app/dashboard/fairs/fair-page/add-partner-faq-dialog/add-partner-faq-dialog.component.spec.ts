import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartnerFaqDialogComponent } from './add-partner-faq-dialog.component';

describe('AddPartnerFaqDialogComponent', () => {
  let component: AddPartnerFaqDialogComponent;
  let fixture: ComponentFixture<AddPartnerFaqDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
