import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairPageComponent } from './fair-page.component';

describe('FairPageComponent', () => {
  let component: FairPageComponent;
  let fixture: ComponentFixture<FairPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
