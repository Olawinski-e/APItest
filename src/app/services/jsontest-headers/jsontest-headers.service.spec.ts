import { TestBed } from '@angular/core/testing';

import { JsontestHeadersService } from './jsontest-headers.service';

describe('JsontestHeadersService', () => {
  let service: JsontestHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsontestHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
