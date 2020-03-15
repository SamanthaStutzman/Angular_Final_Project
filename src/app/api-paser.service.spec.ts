import { TestBed } from '@angular/core/testing';

import { ApiPaserService } from './api-paser.service';

describe('ApiPaserService', () => {
  let service: ApiPaserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPaserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
