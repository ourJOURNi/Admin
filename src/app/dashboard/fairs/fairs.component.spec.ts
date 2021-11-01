import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FairsComponent } from './fairs.component';

describe('FairsComponent', () => {
  let component: FairsComponent;
  let fixture: ComponentFixture<FairsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
