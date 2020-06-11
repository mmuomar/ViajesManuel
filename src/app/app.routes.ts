import { PaisComponent } from './components/pais/pais.component';
import { PaisesComponent } from './components/paises/paises.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'pais/:id', component: PaisComponent },
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
