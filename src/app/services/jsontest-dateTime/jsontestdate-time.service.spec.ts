import { TestBed } from '@angular/core/testing';

import { JsontestdateTimeService } from './jsontestdate-time.service';

describe('JsontestdateTimeService', () => {
  let service: JsontestdateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsontestdateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
