import { TestBed } from '@angular/core/testing';

import { RrhhGuard } from './rrhh.guard';

describe('RrhhGuard', () => {
  let guard: RrhhGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RrhhGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
