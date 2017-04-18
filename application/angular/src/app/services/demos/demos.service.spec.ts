import { TestBed, inject } from '@angular/core/testing';

import { DemosService } from './demos.service';

describe('DemosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemosService]
    });
  });

  it('should ...', inject([DemosService], (service: DemosService) => {
    expect(service).toBeTruthy();
  }));
});
