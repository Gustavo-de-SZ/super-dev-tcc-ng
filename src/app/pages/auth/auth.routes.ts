import { Routes } from '@angular/router';

import { Login } from './login';
import { Cadastro } from './cadastrar';
import { Suporte } from './suporte';


export default [
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro }
] as Routes;
