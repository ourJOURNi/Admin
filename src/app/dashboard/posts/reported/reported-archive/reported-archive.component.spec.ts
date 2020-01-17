import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedArchiveComponent } from './reported-archive.component';

describe('ReportedArchiveComponent', () => {
  let component: ReportedArchiveComponent;
  let fixture: ComponentFixture<ReportedArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
