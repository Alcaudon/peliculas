import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Pelicula } from '../pelicula';
@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent  {

  formulario: FormGroup;
  @Output() botonGuardarPulsado = new EventEmitter<Pelicula>();

  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
   }

   private crearFormulario(): void {
    this.formulario = this._formBuilder.group({
      titulo: ['', Validators.required],
      director: ''
    });
   }

   notificarGuardadoPelicula(): void {
    const pelicula: Pelicula = this.formulario.value as Pelicula;
    this.botonGuardarPulsado.emit(pelicula);
   }

}
