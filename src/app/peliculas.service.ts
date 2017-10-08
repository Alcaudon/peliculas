import { PercentPipe } from '@angular/common/src/pipes/number_pipe';
import { Injectable } from '@angular/core';
import {Pelicula} from './pelicula';

@Injectable()
export class PeliculasService {

  private _titulos: Pelicula[] = [
    new Pelicula (1, 'Mad Max - Fury Road'),
    new Pelicula (2, 'El padrino II'),
    new Pelicula (3, 'Cantando bajo la lluvia'),
    new Pelicula (4, 'Los Vengadores'),
    new Pelicula (5, 'Guardianes de la Galaxia'),
    new Pelicula (6, 'Spiderman HomeComming')
  ];

  obtenerPeliculas(): Pelicula[] {
    return this._titulos;
  }

  agregarPelicula(pelicula: Pelicula): void {
    this._titulos.push(pelicula);
  }

  eliminarPelicula(titulo: Pelicula): void {
    this._titulos = this._titulos.filter(function(n) {
      return n.id !== titulo.id;
    });
  }
}
