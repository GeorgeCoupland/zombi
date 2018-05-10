import { TestBed, inject } from '@angular/core/testing';

import { RequireAnonGuard.ServiceService } from './require-anon-guard.service.service';

describe('RequireAnonGuard.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAnonGuard.ServiceService]
    });
  });

  it('should be created', inject([RequireAnonGuard.ServiceService], (service: RequireAnonGuard.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
