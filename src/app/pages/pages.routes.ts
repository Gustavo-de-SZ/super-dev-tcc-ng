import { Routes } from '@angular/router';
import { Suporte } from './documentation/suporte';
import { Crud } from './crud/crud';
import { Cadastro } from './auth/cadastrar';


export default [
    { path: 'suporte', component: Suporte },
    { path: 'crud', component: Crud },
    {path: 'cadastro', component: Cadastro},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
