import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Pelicula} from '../pelicula'
@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent {

 @Input() pelicula: Pelicula;
 @Output() botonYoutubePulsado = new EventEmitter<string>();
 @Output() botonIMDBPulsado = new EventEmitter<string>();

 notificarNavegacionYoutube(): void {
    this.botonYoutubePulsado.emit(this.contruirRutaYoutube());
 }

 notificarNavegacionIMDB(): void {
    this.botonIMDBPulsado.emit(this.contruirRutaIMDB());
 }

 contruirRutaYoutube(): string {
  return this.pelicula.youtube
  ? `https://www.youtube.com/watch?v=${this.pelicula.youtube}`
  : null;
}

contruirRutaIMDB(): string {
return this.pelicula.imdb
?`http://www.imdb.com/title/${this.pelicula.imdb}`
: null;
}
}
