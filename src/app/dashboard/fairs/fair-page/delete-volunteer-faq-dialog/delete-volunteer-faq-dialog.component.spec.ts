import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteVolunteerFaqDialogComponent } from './delete-volunteer-faq-dialog.component';

describe('DeleteVolunteerFaqDialogComponent', () => {
  let component: DeleteVolunteerFaqDialogComponent;
  let fixture: ComponentFixture<DeleteVolunteerFaqDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVolunteerFaqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVolunteerFaqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
