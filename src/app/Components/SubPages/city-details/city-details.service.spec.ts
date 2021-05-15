import { TestBed } from '@angular/core/testing';

import { CityDetailsService } from './city-details.service';

describe('CityDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityDetailsService = TestBed.get(CityDetailsService);
    expect(service).toBeTruthy();
  });
});
