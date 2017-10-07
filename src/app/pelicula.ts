export class Pelicula {

    constructor(
      public id: number,
      public titulo: string,
      public director?: string,
      public resumen?: string,
      public imagen?: string
    ) {}
}
