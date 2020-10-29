import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPartnersDialogComponent } from './print-partners-dialog.component';

describe('PrintPartnersDialogComponent', () => {
  let component: PrintPartnersDialogComponent;
  let fixture: ComponentFixture<PrintPartnersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPartnersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPartnersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
