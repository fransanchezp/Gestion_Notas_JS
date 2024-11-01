export class Nota {
    constructor(tipo, contenido) {
        this.tipo = tipo;
        this.contenido = contenido;
        this.fechaCreacion = new Date();
    }
}
