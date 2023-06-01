import { Canal } from "./canal.js"

export class Streamer{
    nickname:string
    description:string
    redes:string[]
    canales: Canal[]

    constructor(nickname:string, descripcion:string, redes:string[], canales:Canal[]){
        this.nickname = nickname;
        this.description = descripcion;
        this.redes = redes;
        this.canales = canales;
    }
}