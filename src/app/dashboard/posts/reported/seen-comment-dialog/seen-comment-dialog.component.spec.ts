import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenCommentDialogComponent } from './seen-comment-dialog.component';

describe('SeenCommentDialogComponent', () => {
  let component: SeenCommentDialogComponent;
  let fixture: ComponentFixture<SeenCommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenCommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
