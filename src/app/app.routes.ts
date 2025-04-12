import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},

    {
        path: "home",
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Step Food - Home',
    },

    {
        path: "cart",
        loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
        title: 'Step Food - Cart',
    },
];
