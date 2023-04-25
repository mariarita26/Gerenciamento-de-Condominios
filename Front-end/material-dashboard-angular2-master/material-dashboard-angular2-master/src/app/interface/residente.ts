import { Pessoa } from "./pessoa";

export interface Residente extends Pessoa {
    casa?: String;
    bloco: String;
    numero: number;
}
