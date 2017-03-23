import { TestBed, inject } from '@angular/core/testing';

import { SizesService } from './sizes.service';

describe('SizesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SizesService]
    });
  });

  it('should ...', inject([SizesService], (service: SizesService) => {
    expect(service).toBeTruthy();
  }));
});
