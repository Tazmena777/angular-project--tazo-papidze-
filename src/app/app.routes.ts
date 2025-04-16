import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Pages/cart/cart.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},

    {
        path: "home",
        loadComponent: () => import('./Pages/home/home.component').then(m => m.HomeComponent),
        title: 'Step Food - Home',
    },

    {
        path: "cart",
        loadComponent: () => import('./Pages/cart/cart.component').then(m => m.CartComponent),
        title: 'Step Food - Cart',
    },
];
