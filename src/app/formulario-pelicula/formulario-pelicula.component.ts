import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

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
      titulo: ['', Validators.required],
      director: ''
    });
   }

   guardarPelicula(): void {
    console.log(this.formulario.value);
   }

}
