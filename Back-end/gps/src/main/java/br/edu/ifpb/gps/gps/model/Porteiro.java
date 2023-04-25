package br.edu.ifpb.gps.gps.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Porteiro extends Usuario{
    public Visita createVisita(Residente residente, Visitante visitante){
        return new Visita(this, residente, visitante);
    }
}
