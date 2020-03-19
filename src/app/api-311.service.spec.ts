import { TestBed } from '@angular/core/testing';

import { Api311Service } from './api-311.service';

describe('Api311Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Api311Service = TestBed.get(Api311Service);
    expect(service).toBeTruthy();
  });
});
