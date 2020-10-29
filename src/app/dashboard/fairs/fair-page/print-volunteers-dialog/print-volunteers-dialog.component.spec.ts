import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintVolunteersDialogComponent } from './print-volunteers-dialog.component';

describe('PrintVolunteersDialogComponent', () => {
  let component: PrintVolunteersDialogComponent;
  let fixture: ComponentFixture<PrintVolunteersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintVolunteersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVolunteersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
