import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustButtonComponent } from './just-button.component';

describe('JustButtonComponent', () => {
  let component: JustButtonComponent;
  let fixture: ComponentFixture<JustButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
