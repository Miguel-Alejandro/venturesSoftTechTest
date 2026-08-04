import { TestBed } from '@angular/core/testing';

import { Benefits } from './benefits';

describe('Benefits', () => {
  let service: Benefits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Benefits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
