import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {

  private _titulos: string[] = [
    'Mad Max - Fury Road',
    'El padrino II',
    'Cantando bajo la lluvia',
    'Los Vengadores',
    'Guardianes de la Galaxia',
    'Spiderman HomeComming'
  ];

  obtenerPeliculas(): string[] {
    return this._titulos;
  }

  eliminarPelicula(titulo: string): void {
    this._titulos = this._titulos.filter(function(n) {
      return n !== titulo;
    });
  }
}
