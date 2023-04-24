package br.edu.ifpb.gps.gps.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Residente extends Usuario{
    String casa;
    String bloco;
    int numero;

    public String getCasa() {
        return casa;
    }

    public void setCasa(String casa){
        this.casa = casa;
    }

    public String getBloco() {
        return bloco;
    }

    public void setBloco(String bloco){
        this.bloco = bloco;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero){
        this.numero = numero;
    }

    public void autorizarVisita(Visita visita){
        visita.autorizado = true;
    }
}
