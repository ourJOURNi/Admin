import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeletePostDialogComponent } from './delete-post-dialog.component';

describe('DeletePostDialogComponent', () => {
  let component: DeletePostDialogComponent;
  let fixture: ComponentFixture<DeletePostDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
