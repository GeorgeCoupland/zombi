import { TestBed, inject } from '@angular/core/testing';

import { SightingService } from './sighting.service';

describe('SightingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SightingService]
    });
  });

  it('should be created', inject([SightingService], (service: SightingService) => {
    expect(service).toBeTruthy();
  }));
});
