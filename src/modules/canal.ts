import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"

export class Canal{
    nombre: string
    baner: string
    descripcion: string
    streamer: Streamer
    streamings: Stream[]
    plataforma: Plataforma

    constructor(nombre:string, baner:string, descripcion:string, streamer:Streamer,plataforma:Plataforma ,streamings?: Stream[]){
        this.nombre = nombre;
        this.baner = baner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        this.plataforma = plataforma;
        this.streamings = streamings ? streamings : [];
    }
}