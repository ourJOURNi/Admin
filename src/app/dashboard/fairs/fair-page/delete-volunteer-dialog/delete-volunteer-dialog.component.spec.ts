import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVolunteerDialogComponent } from './delete-volunteer-dialog.component';

describe('DeleteVolunteerDialogComponent', () => {
  let component: DeleteVolunteerDialogComponent;
  let fixture: ComponentFixture<DeleteVolunteerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVolunteerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVolunteerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
