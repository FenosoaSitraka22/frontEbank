import { TestBed } from '@angular/core/testing';

import { AccountOperationsService } from './account-operations.service';

describe('AccountOperationsService', () => {
  let service: AccountOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
