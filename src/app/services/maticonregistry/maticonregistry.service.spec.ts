import { TestBed } from '@angular/core/testing';

import { MaticonregistryService } from './maticonregistry.service';

describe('MaticonregistryService', () => {
  let service: MaticonregistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaticonregistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
