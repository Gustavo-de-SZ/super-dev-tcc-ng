import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InventarioRequest, InventarioResponse } from '../models/inventario.dto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  // url simulada — backend ainda não implementado
  private readonly url = '/api/inventario';

  constructor(private http: HttpClient) { }

  getAll(): Observable<InventarioResponse[]> {
    // Simulando retorno local por enquanto
    return of([
      {
        id: 1,
        nome: 'Notebook Dell',
        tipo: 'Notebook',
        marca: 'Dell',
        modelo: 'Inspiron 15',
        numeroSerie: 'ABC12345',
        sistemaOperacional: 'Windows 11',
        processador: 'Intel i7',
        memoriaRAM: '16GB',
        armazenamento: '512GB SSD',
        observacoes: 'Equipamento principal do escritório'
      }
    ]);
  }

  create(form: InventarioRequest): Observable<void> {
    return of(void 0);
  }

  update(id: number, form: InventarioRequest): Observable<void> {
    return of(void 0);
  }

  delete(id: number): Observable<void> {
    return of(void 0);
  }
}
