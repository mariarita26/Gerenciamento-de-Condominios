import { Pessoa } from "./pessoa";

export interface Usuario extends Pessoa{
    perfil: String;
    senha: String;
}
