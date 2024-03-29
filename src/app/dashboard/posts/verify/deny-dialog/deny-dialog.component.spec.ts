import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DenyDialogComponent } from './deny-dialog.component';

describe('DenyDialogComponent', () => {
  let component: DenyDialogComponent;
  let fixture: ComponentFixture<DenyDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DenyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
