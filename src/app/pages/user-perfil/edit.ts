import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { User } from '@/layout/models/user.dto';
import { UserService } from '@/layout/service/user.service';


@Component({
  selector: 'user-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    PasswordModule,
    ToastModule,
    DividerModule
  ],
  template: `
    <p-toast></p-toast>

    <div class="page">
      <p-card class="card" header="Editar Perfil">
        <div class="form-grid">
          <div class="avatar-section">
            <img [src]="form.avatarUrl || defaultAvatar" alt="Avatar" class="avatar" />
            <p-fileUpload
              mode="basic"
              name="avatar"
              chooseLabel="Trocar foto"
              (onSelect)="onPhotoSelect($event)"
              accept="image/*"
              auto="true"
            ></p-fileUpload>
          </div>

          <div class="form-section">
            <div class="p-fluid">
              <div class="field">
                <label>Nome completo</label>
                <input pInputText [(ngModel)]="form.name" name="name" />
              </div>

              <div class="field">
                <label>Email</label>
                <input pInputText type="email" [(ngModel)]="form.email" name="email" />
              </div>

              <div class="field">
                <label>Telefone</label>
                <input pInputText [(ngModel)]="form.phone" name="phone" placeholder="(xx) xxxxx-xxxx" />
              </div>


              <div class="field">
                <label>Nova Senha (opcional)</label>
                <p-password [(ngModel)]="senha" name="senha" toggleMask="true"></p-password>
              </div>
            </div>
          </div>
        </div>

        <p-divider></p-divider>

        <h3 class="section-title">Endereço</h3>
        <div class="address-grid">
          <div class="field">
            <label>Rua</label>
            <input pInputText [(ngModel)]="endereco.rua" name="rua" />
          </div>
          <div class="field">
            <label>Número</label>
            <input pInputText [(ngModel)]="endereco.numero" name="numero" />
          </div>
          <div class="field">
            <label>Cidade</label>
            <input pInputText [(ngModel)]="endereco.cidade" name="cidade" />
          </div>
          <div class="field">
            <label>Estado</label>
            <input pInputText [(ngModel)]="endereco.estado" name="estado" />
          </div>
          <div class="field">
            <label>CEP</label>
            <input pInputText [(ngModel)]="endereco.cep" name="cep" />
          </div>
        </div>

        <div class="actions">
          <p-button label="Cancelar" icon="pi pi-times" routerLink="/perfil" class="btn-secondary"></p-button>
          <p-button label="Salvar" icon="pi pi-save" (click)="salvar()" class="btn-primary"></p-button>
        </div>
      </p-card>
    </div>
  `,
  styles: [`
    .page {
      height: 100vh;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
    }

    .card {
      width: 950px;
      background: rgba(30, 41, 59, 0.9);
      border-radius: 20px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 230, 255, 0.1);
      backdrop-filter: blur(8px);
    }

    .form-grid {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      background: rgba(15, 23, 42, 0.6);
      border-radius: 12px;
      padding: 1rem;
    }

    .avatar {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 3px solid #00e6ff;
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
      object-fit: cover;
      background-color: #0b1220;
    }

    .section-title {
      color: #00e6ff;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba(0, 230, 255, 0.4);
    }

    .address-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .field label {
      display: block;
      color: #94a3b8;
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    :host ::ng-deep .btn-primary {
      background-color: #00e6ff !important;
      border: none !important;
      color: #0f172a !important;
      font-weight: 600;
    }

    :host ::ng-deep .btn-primary:hover {
      background-color: #00b8cc !important;
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
    }

    :host ::ng-deep .btn-secondary {
      background-color: #475569 !important;
      border: none !important;
      color: #fff !important;
    }

    :host ::ng-deep .btn-secondary:hover {
      background-color: #334155 !important;
    }

    @media (max-width: 768px) {
      .card { width: 100%; padding: 1.5rem; }
      .form-grid { grid-template-columns: 1fr; }
    }
  `],
  providers: [MessageService]
})
export class UserEdit {
  form!: User;
  senha = '';
  endereco = { rua: '', numero: '', cidade: '', estado: '', cep: '' };
  tiposUsuario = [
    { label: 'Cliente', value: 'cliente' },
    { label: 'Técnico', value: 'tecnico' },
    { label: 'Loja', value: 'loja' }
  ];
  defaultAvatar = 'assets/default-avatar.png';

  constructor(private userService: UserService, private msg: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(u => this.form = { ...u });
  }

  onPhotoSelect(event: any) {
    const file = event.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => this.form.avatarUrl = reader.result as string;
    reader.readAsDataURL(file);
  }

  salvar() {
    this.userService.updateUser(this.form).subscribe(() => {
      this.msg.add({ severity: 'success', summary: 'Sucesso', detail: 'Perfil atualizado com sucesso!' });
      setTimeout(() => this.router.navigate(['/perfil']), 1000);
    });
  }
}
