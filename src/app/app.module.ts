import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

import { PeliculasService } from './peliculas.service';
import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    FormularioPeliculaComponent,
    RutaAComponent,
    RutaBComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
