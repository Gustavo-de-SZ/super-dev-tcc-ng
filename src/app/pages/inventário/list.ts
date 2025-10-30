import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InventarioResponse } from '@/layout/models/inventario.dto';
import { InventarioService } from '@/layout/service/inventario.service.ts';


@Component({
  selector: 'inventario-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  template: `
  <div class="page-container">
    <div class="content-card">
      <h1>Inventário de Equipamentos</h1>

      <p-button 
        label="Cadastrar Equipamento" 
        icon="pi pi-plus" 
        routerLink="/inventario/create" 
        class="create-btn" />

      <p-table [value]="equipamentos" [tableStyle]="{ 'min-width': '60rem' }">
        <ng-template pTemplate="header">
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-item>
          <tr>
            <td>{{ item.nome }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.marca }}</td>
            <td>{{ item.modelo }}</td>
            <td>
              <p-button 
                icon="pi pi-pencil" 
                label="Editar"
                [routerLink]="['/inventario/edit', item.id]"
                class="action-btn edit" />
              
              <p-button 
                icon="pi pi-trash" 
                label="Excluir"
                severity="danger"
                (click)="apagar(item.id)"
                class="action-btn delete" />
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      display: flex;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #e2e8f0;
    }

    .content-card {
      width: 90%;
      max-width: 1000px;
      background: rgba(30, 41, 59, 0.85);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    .create-btn {
      margin-bottom: 1rem;
      background-color: #00e6ff !important;
      color: #0f172a !important;
      border: none !important;
    }

    .action-btn {
      margin-right: .5rem;
    }

    h1 {
      color: #00e6ff;
      margin-bottom: 1.5rem;
    }
  `]
})
export class InventarioList implements OnInit {
  equipamentos: InventarioResponse[] = [];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.inventarioService.getAll().subscribe({
      next: res => this.equipamentos = res
    });
  }

  apagar(id: number) {
    if (confirm('Deseja realmente excluir este equipamento?')) {
      this.inventarioService.delete(id).subscribe(() => this.carregar());
    }
  }
}
