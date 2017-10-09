import { Component, Input } from '@angular/core';
import {Pelicula} from '../pelicula'
@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent {

 @Input() pelicula: Pelicula;


}
