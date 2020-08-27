import { TestBed } from '@angular/core/testing';

import { EstimatorDataService } from './estimator-data.service';

describe('EstimatorDataService', () => {
  let service: EstimatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
