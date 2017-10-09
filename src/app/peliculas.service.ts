import { PercentPipe } from '@angular/common/src/pipes/number_pipe';
import { Injectable } from '@angular/core';
import {Pelicula} from './pelicula';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment'

@Injectable()
export class PeliculasService {

  constructor(private _httpClient: HttpClient){}


  obtenerPeliculas(): Observable<Pelicula[]> {
    return this._httpClient.get<Pelicula[]>(`${environment.rutaApi}/peliculas`);
  }

  agregarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this._httpClient.post<Pelicula>(`${environment.rutaApi}/peliculas`, pelicula);
  }

  eliminarPelicula(pelicula: Pelicula):  Observable<Pelicula> {
    return this._httpClient.delete<Pelicula>(`${environment.rutaApi}/peliculas/${pelicula.id}`);
  }
}
