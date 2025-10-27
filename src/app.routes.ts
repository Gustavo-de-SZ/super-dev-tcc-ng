import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';

import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Cadastro } from '@/pages/auth/cadastrar';
import { Login } from '@/pages/auth/login';
import { UserList } from '@/pages/user-perfil/list';
import { UserEdit } from '@/pages/user-perfil/edit';


export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
      
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    {path: 'cadastro', component: Cadastro},
    {path: 'login', component: Login},
    {path: 'user-perfil', component: UserList },
    {path: 'user-edit', component: UserEdit},
  
   
   
   
];
