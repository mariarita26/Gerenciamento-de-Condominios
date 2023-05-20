import { Porteiro } from "./porteiro";
import { Residente } from "./residente";
import { Visitante } from "./visitante";

export interface Visita {
    cadastro: Porteiro,
    autorizacao: Residente,
    // visitante: Visitante | String,
    visitanteId: Visitante | Number,
    data: Date
}
