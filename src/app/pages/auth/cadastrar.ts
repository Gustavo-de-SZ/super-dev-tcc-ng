import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    MessageModule
  ],
  template: `
    <div class="cadastro-container">
      <p-card header="TechHelp - Cadastro" class="cadastro-card">
        <div class="form">
          <span class="p-float-label">
            <input pInputText type="text" [(ngModel)]="nome" placeholder="Nome " />
           
          </span>

          <span class="p-float-label">
            <input pInputText type="email" [(ngModel)]="email" placeholder="E-mail " />
            
          </span>

          <span class="p-float-label">
            <p-password [(ngModel)]="senha" toggleMask="true" placeholder="Senha "></p-password>
           
          </span>

          <p-message *ngIf="erro" severity="error" text="{{ erro }}"></p-message>

          <p-button
            label="Cadastrar"
            icon="pi pi-user-plus"
            styleClass="w-full"
            (click)="cadastrar()"
          ></p-button>

          <p-button
            label="Voltar para Login"
            styleClass="w-full p-button-outlined mt-2"
            (click)="voltarLogin()"
          ></p-button>
        </div>
      </p-card>
    </div>
  `,
  styles: [`
    .cadastro-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #1e293b, #0f172a);
    }

    .cadastro-card {
      width: 400px;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

      .form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  `]
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  erro: string | null = null;

  constructor(private router: Router) {}

  cadastrar() {
    if (!this.nome || !this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    // Simula cadastro e navega para Home
    this.router.navigate(['/dashboard']);
  }

  voltarLogin() {
    this.router.navigate(['login']);
  }
}
