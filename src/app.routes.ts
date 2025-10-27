import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Cadastro } from '@/pages/auth/cadastrar';
import { Login } from '@/pages/auth/login';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { UserList } from '@/pages/user-perfil/list';


export const appRoutes: Routes = [
    {
        path: 'admin',
        component: AppLayout,
        children: [
            { path: '', loadChildren: () => import('./app/pages/pages.routes') },
        ]
    },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: 'auth/login' },
    { path: '**', redirectTo: '/notfound' }
];
