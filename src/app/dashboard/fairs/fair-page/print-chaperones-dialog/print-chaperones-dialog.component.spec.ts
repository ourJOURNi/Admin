import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintChaperonesDialogComponent } from './print-chaperones-dialog.component';

describe('PrintChaperonesDialogComponent', () => {
  let component: PrintChaperonesDialogComponent;
  let fixture: ComponentFixture<PrintChaperonesDialogComponent>;

  beforeEach(async(() => {
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
