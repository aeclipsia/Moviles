import { TestBed } from '@angular/core/testing';

import { IAVisualService } from './iavisual.service';

describe('IAVisualService', () => {
  let service: IAVisualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAVisualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
