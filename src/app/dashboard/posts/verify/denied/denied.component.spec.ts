import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeniedComponent } from './denied.component';

describe('DeniedComponent', () => {
  let component: DeniedComponent;
  let fixture: ComponentFixture<DeniedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
