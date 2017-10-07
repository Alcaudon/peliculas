import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Películas';
  titulos: string[] = [
    'Mad Max - Fury Road',
    'El padrino II',
    'Cantando bajo la lluvia',
    'Los Vengadores',
    'Guardianes de la Galaxia'
  ];

  eliminarPelicula(titulo: string): void {
    this.titulos = this.titulos.filter(n => n !== titulo);
  }
}
