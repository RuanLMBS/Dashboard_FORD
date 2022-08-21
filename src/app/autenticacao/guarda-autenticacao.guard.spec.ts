import { TestBed } from '@angular/core/testing';

import { GuardaAutenticacaoGuard } from './guarda-autenticacao.guard';

describe('GuardaAutenticacaoGuard', () => {
  let guard: GuardaAutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaAutenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
