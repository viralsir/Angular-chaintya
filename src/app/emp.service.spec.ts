import { TestBed } from '@angular/core/testing';

import { EMPService } from './emp.service';

describe('EMPService', () => {
  let service: EMPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
