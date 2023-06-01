import { Canal } from "./canal.js"
import { Categoria } from "./categoria.js"

export class Stream{
    fecha:Date
    duracion:number
    categorias:Categoria[]
    canal: Canal

    constructor(fecha:Date, duracion:number, categorias:Categoria[], canal:Canal){
        this.fecha = fecha;
        this.duracion = duracion;
        this.categorias = categorias
        this.canal = canal;
    }
}