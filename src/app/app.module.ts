import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
