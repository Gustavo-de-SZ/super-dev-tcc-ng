import { Routes } from '@angular/router';

import { Login } from './login';
import { Error } from './error';
import { Cadastro } from './cadastrar';
import { Suporte } from './suporte';


export default [
    { path: 'suporte', component: Suporte },
    { path: 'error', component: Error },
    { path: 'login', component: Login },
    {path: 'cadastro', component: Cadastro }
] as Routes;
