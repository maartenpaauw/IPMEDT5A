import { TestBed, inject } from '@angular/core/testing';

import { OpgepaktVandaagService } from './opgepakt-vandaag.service';

describe('OpgepaktVandaagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpgepaktVandaagService]
    });
  });

  it('should ...', inject([OpgepaktVandaagService], (service: OpgepaktVandaagService) => {
    expect(service).toBeTruthy();
  }));
});
