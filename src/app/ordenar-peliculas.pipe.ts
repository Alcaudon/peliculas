import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from './pelicula'

@Pipe({
  name: 'ordenarPeliculas'
})
export class OrdenarPeliculasPipe implements PipeTransform {

  transform(value: Pelicula[], orden: string): Pelicula[] {

    let peliculasOrdenadas: Pelicula[];
    if (value) {
      if (orden === 'asc') {
        peliculasOrdenadas = value.sort((peliculaA: Pelicula, peliculaB: Pelicula): number => {

          const tituloPeliculaA: string = `${peliculaA.titulo}`.toLowerCase();
          const tituloPeliculaB: string = `${peliculaB.titulo}`.toLowerCase();

          return tituloPeliculaA > tituloPeliculaB ? 1 : tituloPeliculaA < tituloPeliculaB ? -1 : 0;
        });

      } else {
        peliculasOrdenadas = value.sort((peliculaA: Pelicula, peliculaB: Pelicula): number => {

          const tituloPeliculaA: string = `${peliculaA.titulo}`.toLowerCase();
          const tituloPeliculaB: string = `${peliculaB.titulo}`.toLowerCase();

          return tituloPeliculaA < tituloPeliculaB ? 1 : tituloPeliculaA > tituloPeliculaB ? -1 : 0;
        });

      }
    } else {
      peliculasOrdenadas = [];
    }
    return peliculasOrdenadas;

  }

}
