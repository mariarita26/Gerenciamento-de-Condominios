import { Pessoa } from "./pessoa";

export interface Usuario extends Pessoa{
    perfil: string;
    senha: string;
}
