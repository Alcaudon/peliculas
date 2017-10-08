import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RutaAComponent } from '../ruta-a/ruta-a.component';
import { RutaBComponent } from '../ruta-b/ruta-b.component';

const rutas: Routes = [
  {
    path: 'lista-peliculas',
    component: RutaAComponent
  },
  {
    path: 'nueva-pelicula',
    component: RutaBComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/lista-peliculas'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
