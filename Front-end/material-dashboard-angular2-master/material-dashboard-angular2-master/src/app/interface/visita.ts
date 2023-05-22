import { Porteiro } from "./porteiro";
import { Residente } from "./residente";
import { Visitante } from "./visitante";

export interface Visita {
    idVisita?: number,
    cadastro: String,
    autorizacao: String,
    visitanteId: number,
    data: Date
}
// visita{
//     id: null,
//     porteiro: idPorteiro,
//     autorizacao: idResidente,
//     visitante: idVisitante,
//     data: Date
// }