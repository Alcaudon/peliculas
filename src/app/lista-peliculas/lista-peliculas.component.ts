import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Pelicula} from '../pelicula';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent  {

 @Output() botonElininarPulsado = new EventEmitter <Pelicula> ();

 @Input() peliculas: Pelicula[];

 notificarEliminacionPelicula(pelicula: Pelicula): void {
    this.botonElininarPulsado.emit(pelicula);
 }
}
