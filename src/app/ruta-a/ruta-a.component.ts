import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  peliculas$: Observable<Pelicula[]>;
  peliculaSeleccionada: Pelicula;

  constructor(private _peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas$ = this._peliculasService.obtenerPeliculas();
  }

  eliminarPelicula(titulo: Pelicula): void {
    this._peliculasService.eliminarPelicula(titulo);
    //this.titulos = this._peliculasService.obtenerPeliculas();
  }

  verDetalles(titulo: Pelicula): void {
    this.peliculaSeleccionada = titulo;
  }

  verTrailer(ruta: string): void {
    window.open(ruta, '_blank');
  }
  verDatos(ruta: string): void {
    window.open(ruta, '_blank');
  }


}
