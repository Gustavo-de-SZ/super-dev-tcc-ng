import { Routes } from '@angular/router';

import { Suporte } from './auth/suporte';
import { UserList } from './user-perfil/list';
import { Dashboard } from './dashboard/dashboard';


export default [
    { path: 'dashboard', component: Dashboard },
    { path: 'suporte', component: Suporte },
    { path: 'user-perfil', component: UserList },
    { path: '**', redirectTo: "dashboard"}
] as Routes;