import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Pelicula} from '../pelicula';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent  {

  orden: string = 'asc';

 @Output() botonElininarPulsado = new EventEmitter <Pelicula> ();
 @Output() peliculaSeleccionada = new EventEmitter <Pelicula> ();

 @Input() peliculas: Pelicula[];

 notificarEliminacionPelicula(pelicula: Pelicula): void {
    this.botonElininarPulsado.emit(pelicula);
 }

 notificarSeleccionPelicula(pelicula: Pelicula):void{
    this.peliculaSeleccionada.emit(pelicula);
 }

 cambiarOrden(): void {
    this.orden = this.orden ==='asc' ? 'desc' : 'asc';
 }
}
