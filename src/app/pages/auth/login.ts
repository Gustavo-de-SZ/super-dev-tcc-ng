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
  selector: 'login',
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
    <div class="login-container">
      <p-card header="TechHelp - Login" class="login-card">
        <div class="form">
          <span class="p-float-label">
            <input pInputText type="email" [(ngModel)]="email" placeholder="E-mail" fluid />
          
          </span>

          <span class="p-float-label">
            <p-password [(ngModel)]="senha" toggleMask="true" placeholder="Senha" fluid></p-password>
           
          </span>

          <p-message *ngIf="erro" severity="error" text="{{ erro }}"></p-message>
        <div class="flex">

          
          <p-button
          label="Entrar"
          icon="pi pi-sign-in"
          styleClass="w-full"
          (click)="logar()"
          ></p-button>
          
          <p-button
          label="Cadastrar"
          styleClass="w-full p-button-outlined mt-2"
          (click)="irParaCadastro()"
          ></p-button>
        </div>
      </div>
      </p-card>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #1e293b, #0f172a);
    }

    .login-card {
      width: 380px;
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
export class Login {
  email = '';
  senha = '';
  erro: string | null = null;

  constructor(private router: Router) {}

  logar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    // Simula login e navega para Home
    this.router.navigate(['/']);
  }

  irParaCadastro() {
    this.router.navigate(['cadastro']);
  }
}
