import { Pessoa } from "./pessoa";

export interface Visitante extends Pessoa{
    veiculo: string;
    placa: string;
}
