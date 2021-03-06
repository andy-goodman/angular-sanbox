import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraversalComponent } from './transversal.component';

describe('TransversalComponent', () => {
  let component: TraversalComponent;
  let fixture: ComponentFixture<TraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
