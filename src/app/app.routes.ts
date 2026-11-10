import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'estudantes',
    loadComponent: () => import('./pages/estudantes/estudantes.page').then((m) => m.EstudantesPage),
  },
  {
    path: 'avaliacoes',
    loadComponent: () => import('./pages/avaliacoes/avaliacoes.page').then((m) => m.AvaliacoesPage),
  },
  {
    path: 'correcao',
    loadComponent: () => import('./pages/correcao/correcao.page').then((m) => m.CorrecaoPage),
  },
  {
    path: 'resultados',
    loadComponent: () => import('./pages/resultados/resultados.page').then((m) => m.ResultadosPage),
  },
  {
    path: 'resultado-detalhe',
    loadComponent: () => import('./pages/resultado-detalhe/resultado-detalhe.page').then((m) => m.ResultadoDetalhePage),
  },
];
