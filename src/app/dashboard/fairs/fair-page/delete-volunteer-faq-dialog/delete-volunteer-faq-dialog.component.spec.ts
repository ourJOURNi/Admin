import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVolunteerFaqDialogComponent } from './delete-volunteer-faq-dialog.component';

describe('DeleteVolunteerFaqDialogComponent', () => {
  let component: DeleteVolunteerFaqDialogComponent;
  let fixture: ComponentFixture<DeleteVolunteerFaqDialogComponent>;

  beforeEach(async(() => {
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
