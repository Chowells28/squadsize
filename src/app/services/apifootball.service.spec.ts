import { TestBed, inject } from '@angular/core/testing';

import { ApifootballService } from './apifootball.service';

describe('ApifootballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApifootballService]
    });
  });

  it('should be created', inject([ApifootballService], (service: ApifootballService) => {
    expect(service).toBeTruthy();
  }));
});
