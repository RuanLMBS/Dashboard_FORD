import { TestBed } from '@angular/core/testing';

import { NovoVeiculoService } from './novo-veiculo.service';

describe('NovoVeiculoService', () => {
  let service: NovoVeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoVeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
