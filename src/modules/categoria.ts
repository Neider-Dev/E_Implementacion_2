import { Stream } from "./stream.js"
export class Categoria{
    nombre:string
    imagen:string
    description:string
    streamings: Stream[]

    constructor(nombre:string, imagen:string, descripcion:string, streamings?:Stream[]){
        this.nombre = nombre;
        this.imagen = imagen;
        this.description = descripcion;
        this.streamings = streamings ? streamings: []; 
    }
}