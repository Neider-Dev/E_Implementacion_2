export class Categoria {
    constructor(nombre, imagen, descripcion, streamings) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.description = descripcion;
        this.streamings = streamings ? streamings : [];
    }
}
