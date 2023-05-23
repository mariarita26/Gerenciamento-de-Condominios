import { Porteiro } from "./porteiro";
import { Residente } from "./residente";
import { Visitante } from "./visitante";

export interface Visita {
    idVisita?: number,
    cadastro: String,
    autorizacao: String,
    visitanteId: String,
    data: Date
}
// visita{
//     id: null,
//     porteiro: idPorteiro,
//     autorizacao: idResidente,
//     visitante: idVisitante,
//     data: Date
// }