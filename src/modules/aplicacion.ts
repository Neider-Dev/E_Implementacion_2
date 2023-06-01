import { Plataforma } from "./plataforma.js";

export class  Aplicacion{
    plataformas: Plataforma[]

    constructor(plataformas?:Plataforma[]){
        this.plataformas = plataformas ? plataformas : [];
    }
}