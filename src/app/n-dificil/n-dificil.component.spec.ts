import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NDificilComponent } from './n-dificil.component';

describe('NDificilComponent', () => {
  let component: NDificilComponent;
  let fixture: ComponentFixture<NDificilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NDificilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NDificilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
