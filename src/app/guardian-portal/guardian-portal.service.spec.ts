import { TestBed } from '@angular/core/testing';

import { GuardianPortalService } from './guardian-portal.service';

describe('GuardianPortalService', () => {
  let service: GuardianPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
