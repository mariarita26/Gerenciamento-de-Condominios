package br.edu.ifpb.gps.gps.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class Usuario extends Pessoa{
    String email;
    String senha;
}
