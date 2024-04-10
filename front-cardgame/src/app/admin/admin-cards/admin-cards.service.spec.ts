import { TestBed } from '@angular/core/testing';

import { AdminCardsService } from './admin-cards.service';

describe('AdminCardsService', () => {
  let service: AdminCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
