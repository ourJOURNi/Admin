import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintChaperonesDialogComponent } from './print-chaperones-dialog.component';

describe('PrintChaperonesDialogComponent', () => {
  let component: PrintChaperonesDialogComponent;
  let fixture: ComponentFixture<PrintChaperonesDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintChaperonesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintChaperonesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
