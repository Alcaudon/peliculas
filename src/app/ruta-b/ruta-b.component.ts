import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import {Pelicula} from '../pelicula';


@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  constructor(
    private _peliculasService: PeliculasService,
    private _router:Router
  ) { }

  crearPelicula(pelicula: Pelicula): void {
    this._peliculasService.agregarPelicula(pelicula);
    this._router.navigate(['/lista-peliculas']);
  }

}
