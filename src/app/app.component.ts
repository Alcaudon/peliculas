import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulos: string[] = [
    'Mad Max - Fury Road',
    'El padrino',
    'Cantando bajo la lluvia',
    'Los Vengadores',
    'Guardianes de la Galaxia'
  ];
}
