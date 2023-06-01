export class Canal {
    constructor(nombre, baner, descripcion, streamer, plataforma, streamings) {
        this.nombre = nombre;
        this.baner = baner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.plataforma = plataforma;
        this.streamings = streamings ? streamings : [];
    }
}
