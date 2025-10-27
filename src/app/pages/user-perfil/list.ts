import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { User } from '@/layout/models/user.dto';
import { UserService } from '@/layout/service/user.service';


@Component({
  selector: 'user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule, DividerModule],
  template: `
    <div class="page">
      <p-card class="card">
        <div class="header">
          <img [src]="user?.avatarUrl || defaultAvatar" alt="Avatar" class="avatar" />
          <div class="title-block">
            <h1 class="title">{{ user?.name || 'Usuário' }}</h1>
            <p class="subtitle"></p>
          </div>
        </div>

        <p-divider></p-divider>

        <div class="info">
          <div class="info-item">
            <label>Email</label>
            <p>{{ user?.email }}</p>
          </div>

          <div class="info-item" *ngIf="user?.phone">
            <label>Telefone</label>
            <p>{{ user?.phone }}</p>
          </div>
          </div>

        <div class="actions">
          <p-button
            label="Editar Perfil"
            icon="pi pi-user-edit"
            routerLink="/user-edit"
            styleClass="p-button-rounded p-button-info"
          ></p-button>
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
      width: 600px;
      background: rgba(30, 41, 59, 0.85);
      border-radius: 20px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(0, 230, 255, 0.1);
      backdrop-filter: blur(8px);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 3px solid #00e6ff;
      object-fit: cover;
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
    }

    .title {
      margin: 0;
      color: #00e6ff;
      font-size: 1.8rem;
    }

    .subtitle {
      color: #94a3b8;
      font-size: 1rem;
    }

    .info {
      margin: 1.5rem 0;
    }

    .info-item {
      background: rgba(15, 23, 42, 0.5);
      padding: 1rem;
      border-radius: 12px;
      margin-bottom: 0.8rem;
      border: 1px solid rgba(148, 163, 184, 0.15);
    }

    .info-item label {
      display: block;
      color: #94a3b8;
      font-size: 0.9rem;
    }

    .info-item p {
      margin: 0.2rem 0 0;
      font-weight: 600;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1.2rem;
    }

    :host ::ng-deep .p-button-info {
      background-color: #00e6ff !important;
      border: none;
      color: #0f172a;
      font-weight: 600;
    }

    :host ::ng-deep .p-button-info:hover {
      background-color: #00b8cc !important;
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.4);
    }
  `]
})
export class UserList {
  user?: User;
  defaultAvatar = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(u => (this.user = u));
  }
}
