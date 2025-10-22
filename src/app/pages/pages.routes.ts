import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Home } from './user/home';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'home', component: Home },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
