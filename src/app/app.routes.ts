import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },          // Ruta raíz
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige cualquier ruta no válida a la raíz
];
