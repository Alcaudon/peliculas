import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

import { PeliculasService } from './peliculas.service';
import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    FormularioPeliculaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
