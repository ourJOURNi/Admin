import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFairDialogComponent } from './delete-fair-dialog.component';

describe('DeleteFairDialogComponent', () => {
  let component: DeleteFairDialogComponent;
  let fixture: ComponentFixture<DeleteFairDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
