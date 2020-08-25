import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorCalculatorComponent } from './estimator-calculator.component';

describe('EstimatorCalculatorComponent', () => {
  let component: EstimatorCalculatorComponent;
  let fixture: ComponentFixture<EstimatorCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatorCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
