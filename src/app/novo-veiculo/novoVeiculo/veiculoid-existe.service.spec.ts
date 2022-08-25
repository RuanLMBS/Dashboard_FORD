import { TestBed } from '@angular/core/testing';

import { VeiculoidExisteService } from './veiculoid-existe.service';

describe('VeiculoidExisteService', () => {
  let service: VeiculoidExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoidExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
