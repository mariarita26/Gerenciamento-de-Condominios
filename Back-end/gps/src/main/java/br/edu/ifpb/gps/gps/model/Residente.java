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

    public void autorizarVisita(Visita visita){
        visita.autorizado = true;
    }
}
