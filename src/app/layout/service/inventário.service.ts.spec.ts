/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { InventarioService } from './inventario.service.ts';



describe('InventárioServiceTs', () => {
  let service: InventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

