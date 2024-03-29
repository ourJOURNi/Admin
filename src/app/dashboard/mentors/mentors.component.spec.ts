import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorsComponent } from './mentors.component';

describe('MentorsComponent', () => {
  let component: MentorsComponent;
  let fixture: ComponentFixture<MentorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
