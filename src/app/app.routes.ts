import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './pages/home/home';
import { Login } from './pages/authentication/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: "",
        component: MainLayout,
        children: [{
            path: "home",
            component: Home
        }]
    },
    {
        path: "login",
        component: Login
    }
];
