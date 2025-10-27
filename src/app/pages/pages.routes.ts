import { Routes } from '@angular/router';

import { Crud } from './crud/crud';
import { Cadastro } from './auth/cadastrar';


export default [

    { path: 'crud', component: Crud },
    {path: 'cadastro', component: Cadastro},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
