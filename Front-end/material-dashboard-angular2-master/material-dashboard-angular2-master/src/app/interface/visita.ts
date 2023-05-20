import { Porteiro } from "./porteiro";
import { Residente } from "./residente";
import { Visitante } from "./visitante";

export interface Visita {
    idVisita?: number,
    cadastro: Porteiro,
    autorizacao: Residente,
    visitanteId: Visitante | number,
    data: Date
}
