import { Routes } from '@angular/router';
import { UtentiLayoutComponent } from './pages/utenti-layout/utenti-layout';
import { UtentiListaComponent } from './pages/utenti-lista/utenti-lista';
import { UtentiStatisticheComponent } from './pages/utenti-statistiche/utenti-statistiche';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'utenti/lista',
        pathMatch: 'full'
    },
    {
        path: 'utenti',
        component: UtentiLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            },
            {
                path: 'lista',
                component: UtentiListaComponent
            },
            {
                path: 'statistiche',
                component: UtentiStatisticheComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'utenti/lista'
    }
];
