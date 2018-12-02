import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideoCourseComponent } from './create-video-course.component';

describe('CreateVideoCourseComponent', () => {
  let component: CreateVideoCourseComponent;
  let fixture: ComponentFixture<CreateVideoCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVideoCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVideoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
