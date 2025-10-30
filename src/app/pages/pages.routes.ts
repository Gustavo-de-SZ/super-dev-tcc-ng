import { Routes } from '@angular/router';

import { Suporte } from './auth/suporte';
import { UserList } from './user-perfil/list';
import { Dashboard } from './dashboard/dashboard';
import { InventarioList } from './inventário/list';
import { InventarioEdit } from './inventário/edit';
import { InventarioCreate } from './inventário/create';


export default [
    { path: 'dashboard', component: Dashboard },
    { path: 'suporte', component: Suporte },
    { path: 'user-perfil', component: UserList },
    { path: '**', redirectTo: "dashboard"},
    {path: 'inventario', component: InventarioList },
    {path: 'inventario-edit', component: InventarioEdit },
    {path: 'inventario-create', component: InventarioCreate },
    
] as Routes;