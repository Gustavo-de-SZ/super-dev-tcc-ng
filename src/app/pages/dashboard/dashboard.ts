import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterModule, ButtonModule, CardModule, DividerModule],
  template: `
    <div class="page-container">
      <p-card class="home-card">
        <h1 class="title">TechHelp</h1>
        <p class="subtitle">Conectando você à assistência técnica certa, rápido e com confiança.</p>

        <p-divider></p-divider>

        <div class="content-section">
    
          <ul class="feature-list">
            <li>🔧 Encontre <strong>técnicos especializados</strong> próximos para conserto e manutenção.</li>
            <li>🛒 Veja <strong>lojas confiáveis</strong> de informática e eletrônicos na sua região.</li>
            <li>💬 Solicite <strong>suporte técnico remoto</strong> para dúvidas rápidas ou pequenos reparos.</li>
            <li>👤 Gerencie seu <strong>perfil de usuário</strong> e histórico de solicitações.</li>
          </ul>
        </div>

        <p-divider></p-divider>

        <div class="button-grid">
          <p-button label="Suporte Técnico" icon="pi pi-headphones" class="action-btn"
                    (click)="navegar('/suporte')"></p-button>

          <p-button label="Lojas Próximas" icon="pi pi-shopping-cart" class="action-btn"
                    (click)="navegar('/lojas')"></p-button>

          <p-button label="Perfil" icon="pi pi-user" class="action-btn"
                    (click)="navegar('/perfil')"></p-button>

          <p-button label="Sair" icon="pi pi-sign-out" class="logout-btn"
                    (click)="sair()"></p-button>
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

    .home-card {
      width: 750px;
      padding: 2rem 2.5rem;
      border-radius: 20px;
      background: rgba(30, 41, 59, 0.85);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      text-align: center;
    }

    .title {
      color: #00e6ff;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 10px rgba(0, 230, 255, 0.4);
    }

    .subtitle {
      color: #94a3b8;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .content-section {
      text-align: left;
      margin: 2rem 0;

      h2 {
        color: #00e6ff;
        margin-bottom: 1rem;
        font-size: 1.3rem;
      }

      .feature-list {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 0.8rem;
          font-size: 1rem;
          color: #cbd5e1;
        }
      }
    }

    .button-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 2rem;
    }

    .action-btn {
      width: 100%;
      font-weight: 600;
      background-color: #00e6ff !important;
      color: #0f172a !important;
      border: none !important;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 230, 255, 0.5);
    }

    .logout-btn {
      grid-column: span 2;
      width: 100%;
      background-color: #ef4444 !important;
      border: none !important;
      font-weight: 600;
      color: white !important;
      margin-top: 0.5rem;
      transition: background 0.3s ease;
    }

    .logout-btn:hover {
      background-color: #dc2626 !important;
    }
  `]
})
export class Dashboard {
  constructor(private router: Router) {}

  navegar(destino: string) {
    this.router.navigate([destino]);
  }

  sair() {
    this.router.navigate(['auth/login']);
  }
}
