import { TestBed } from '@angular/core/testing';

import { MainComponentServiceService } from './main-component-service.service';

describe('MainComponentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainComponentServiceService = TestBed.get(MainComponentServiceService);
    expect(service).toBeTruthy();
  });
});
