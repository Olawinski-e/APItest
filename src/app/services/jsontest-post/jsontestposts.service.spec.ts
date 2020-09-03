import { TestBed } from '@angular/core/testing';

import { JsontestpostsService } from './jsontestposts.service';

describe('JsontestpostsService', () => {
  let service: JsontestpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsontestpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
