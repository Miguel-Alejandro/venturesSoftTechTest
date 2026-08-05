import { TestBed } from '@angular/core/testing';

import { InstantCoupons } from './instant-coupons';

describe('InstantCoupons', () => {
  let service: InstantCoupons;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstantCoupons);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
