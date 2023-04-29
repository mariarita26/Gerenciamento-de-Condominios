import { Pessoa } from "./pessoa";

export interface Residente extends Pessoa {
    casa?: string;
    bloco: string;
    numero: number;
}
