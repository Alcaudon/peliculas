import { Component } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent  {

  formulario: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
   }

   private crearFormulario(): void {
    this.formulario = this._formBuilder.group({
      titulo: '',
      director: ''
    });
   }

   guardarPelicula(): void {
    console.log(this.formulario.value);
   }

}
