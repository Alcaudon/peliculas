import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  titulos: Pelicula[];
  peliculaSeleccionada: Pelicula;

  constructor(private _peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.titulos = this._peliculasService.obtenerPeliculas();
  }

  eliminarPelicula(titulo: Pelicula): void {
    this._peliculasService.eliminarPelicula(titulo);
    this.titulos = this._peliculasService.obtenerPeliculas();
  }

  verDetalles(titulo: Pelicula): void {
    this.peliculaSeleccionada = titulo;
  }
}
