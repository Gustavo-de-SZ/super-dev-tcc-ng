import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'suporte',
  standalone: true,
  imports: [RouterModule, CardModule, ButtonModule, DividerModule],
  template: `
    <div class="page-container">
      <p-card class="suporte-card">
        <h1 class="title">Suporte Técnico</h1>
        <p class="subtitle">Precisa de ajuda? Nossa equipe está pronta para resolver seus problemas técnicos.</p>

        <p-divider></p-divider>

        <section class="content-section">
          <ul class="support-list">
            <li>💻 <strong>Assistência remota</strong> — Conecte-se com um técnico e resolva o problema sem sair de casa.</li>
            <li>⚙️ <strong>Manutenção preventiva</strong> — Evite falhas e lentidão com verificações periódicas.</li>
            <li>📱 <strong>Suporte a dispositivos</strong> — Smartphones, notebooks, impressoras e mais.</li>
            <li>⏱️ <strong>Atendimento rápido</strong> — Técnicos verificados disponíveis em poucos minutos.</li>
          </ul>
        </section>

        <p-divider></p-divider>

        <div class="button-grid">
          <p-button label="Solicitar Ajuda" icon="pi pi-send" class="action-btn"></p-button>
          <p-button label="Voltar" icon="pi pi-arrow-left" class="logout-btn" routerLink="/main/home"></p-button>
        </div>
      </p-card>
    </div>
  `,
  styles: [`
    .page-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      padding: 1rem;
    }

    .suporte-card {
      width: 750px;
      padding: 2.5rem;
      border-radius: 20px;
      background: rgba(30, 41, 59, 0.9);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      text-align: center;
    }

    .title {
      color: #00e6ff;
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 15px rgba(0, 230, 255, 0.5);
    }

    .subtitle {
      color: #94a3b8;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }

    .support-list {
      text-align: left;
      list-style: none;
      padding: 0;
    }

    .support-list li {
      margin-bottom: 0.9rem;
      color: #cbd5e1;
      font-size: 1rem;
    }

    .button-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 2rem;
    }

    .action-btn {
      background-color: #00e6ff !important;
      color: #0f172a !important;
      border: none !important;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.6);
    }

    .logout-btn {
      background-color: #64748b !important;
      color: white !important;
      border: none !important;
      font-weight: 600;
    }

    .logout-btn:hover {
      background-color: #475569 !important;
    }
  `]
})
export class Suporte {
  
}
