import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent  {

 @Output() botonElininarPulsado = new EventEmitter <string> ();

 @Input() peliculas: string[];

 notificarEliminacionPelicula(pelicula: string): void {
    this.botonElininarPulsado.emit(pelicula);
 }
}
