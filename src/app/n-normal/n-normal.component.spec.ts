import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NNormalComponent } from './n-normal.component';

describe('NNormalComponent', () => {
  let component: NNormalComponent;
  let fixture: ComponentFixture<NNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
