import { strictEqual } from 'assert';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import {Pelicula} from './pelicula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Películas';
  titulos: Pelicula[];

  constructor(private _peliculasService: PeliculasService) {
    console.log('Componente instanciado y servicio inyectado');
  }

  ngOnInit(): void {
    this.titulos = this._peliculasService.obtenerPeliculas();
  }
  eliminarPelicula(titulo: Pelicula): void {
    this._peliculasService.eliminarPelicula(titulo);
    this.titulos = this._peliculasService.obtenerPeliculas();
  }
}
