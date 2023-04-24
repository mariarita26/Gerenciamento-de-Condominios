package br.edu.ifpb.gps.gps.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.time.LocalDate;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Visita {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @ManyToOne
    Porteiro porteiro;
    @ManyToOne
    Residente residente;
    @OneToOne
    Visitante visitante;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    LocalDate data = LocalDate.now();
    boolean autorizado = false;

    public Visita(Porteiro porteiro, Residente residente, Visitante visitante){
        this.porteiro = porteiro;
        this.residente = residente;
        this.visitante = visitante;
        this.data = LocalDate.now();
    }
}
