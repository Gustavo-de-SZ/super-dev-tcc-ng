import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';

import { ButtonModule } from 'primeng/button';
import { InventarioRequest } from '@/layout/models/inventario.dto';
import { InventarioService } from '@/layout/service/inventario.service.ts';


@Component({
  selector: 'inventario-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    TreeSelectModule,
    ButtonModule
  ],
  template: `
  <div class="page-container">
    <div class="form-card">
      <h2>Cadastrar Equipamento</h2>

      <form (ngSubmit)="salvar()">
        <div class="form-grid">
          <label>Nome:</label>
          <input pInputText [(ngModel)]="form.nome" name="nome" required />

          <label>Categoria:</label>
          <p-treeSelect
            [options]="tipoTree"
            [(ngModel)]="form.tipo"
            name="tipo"
            placeholder="Selecione o tipo de equipamento"
            selectionMode="single"
            class="w-full">
          </p-treeSelect>

          <label>Marca:</label>
          <input pInputText [(ngModel)]="form.marca" name="marca" />

          <label>Modelo:</label>
          <input pInputText [(ngModel)]="form.modelo" name="modelo" />

          <label>Nº de Série:</label>
          <input pInputText [(ngModel)]="form.numeroSerie" name="numeroSerie" />

          <label>Sistema Operacional:</label>
          <input pInputText [(ngModel)]="form.sistemaOperacional" name="sistemaOperacional" />

          <label>Processador:</label>
          <input pInputText [(ngModel)]="form.processador" name="processador" />

          <label>Memória RAM:</label>
          <input pInputText [(ngModel)]="form.memoriaRAM" name="memoriaRAM" />

          <label>Armazenamento:</label>
          <input pInputText [(ngModel)]="form.armazenamento" name="armazenamento" />

          <label>Observações:</label>
          <textarea pInputTextarea [(ngModel)]="form.observacoes" name="observacoes"></textarea>
        </div>

        <div class="button-row">
          <p-button label="Salvar" icon="pi pi-save" type="submit" />
          <p-button label="Cancelar" icon="pi pi-times" class="p-button-secondary" routerLink="/inventario" />
        </div>
      </form>
    </div>
  </div>
  `,
  styles: [`
    .page-container {
      display: flex;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #e2e8f0;
      min-height: 100vh;
      padding: 2rem;
    }

    .form-card {
      background: rgba(30, 41, 59, 0.85);
      border-radius: 20px;
      padding: 2rem;
      width: 600px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .button-row {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
    }

    h2 {
      color: #00e6ff;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    p-treeSelect, input, textarea {
      width: 100%;
    }
  `]
})
export class InventarioEdit {
  tipoTree: any[] = [
    {
      label: 'Computadores',
      key: 'computadores',
      children: [
        { label: 'Desktop', key: 'desktop' },
        { label: 'Notebook', key: 'notebook' },
        { label: 'Servidor', key: 'servidor' }
      ]
    },
    {
      label: 'Periféricos',
      key: 'perifericos',
      children: [
        { label: 'Monitor', key: 'monitor' },
        { label: 'Teclado', key: 'teclado' },
        { label: 'Mouse', key: 'mouse' }
      ]
    },
    {
      label: 'Outros',
      key: 'outros',
      children: [
        { label: 'Impressora', key: 'impressora' },
        { label: 'Scanner', key: 'scanner' },
        { label: 'Outro Equipamento', key: 'outro' }
      ]
    }
  ];

  form: InventarioRequest = {
    nome: '',
    tipo: '',
    marca: '',
    modelo: '',
    numeroSerie: '',
    sistemaOperacional: '',
    processador: '',
    memoriaRAM: '',
    armazenamento: '',
    observacoes: ''
  };

  constructor(private inventarioService: InventarioService, private router: Router) {}

  salvar() {
    this.inventarioService.create(this.form).subscribe({
      next: () => this.router.navigate(['/inventario'])
    });
  }
}
