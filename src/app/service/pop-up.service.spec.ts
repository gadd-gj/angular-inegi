import { TestBed } from '@angular/core/testing';

import { PopUpService } from './pop-up.service';

describe('PopUpService', () => {
  let service: PopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopUpService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
