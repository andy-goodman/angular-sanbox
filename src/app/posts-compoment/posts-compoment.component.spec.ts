import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompomentComponent } from './posts-compoment.component';

describe('PostsCompomentComponent', () => {
  let component: PostsCompomentComponent;
  let fixture: ComponentFixture<PostsCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
