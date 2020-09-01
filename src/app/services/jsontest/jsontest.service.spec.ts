import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JsontestService } from './jsontest.service';

describe('JsontestService', () => {
  let service: JsontestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JsontestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
