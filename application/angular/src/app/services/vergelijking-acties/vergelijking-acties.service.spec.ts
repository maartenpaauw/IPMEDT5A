import { TestBed, inject } from '@angular/core/testing';

import { VergelijkingActiesService } from './vergelijking-acties.service';

describe('VergelijkingActiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VergelijkingActiesService]
    });
  });

  it('should ...', inject([VergelijkingActiesService], (service: VergelijkingActiesService) => {
    expect(service).toBeTruthy();
  }));
});
