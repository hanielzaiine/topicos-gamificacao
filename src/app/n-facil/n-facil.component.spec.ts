import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFacilComponent } from './n-facil.component';

describe('NFacilComponent', () => {
  let component: NFacilComponent;
  let fixture: ComponentFixture<NFacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
