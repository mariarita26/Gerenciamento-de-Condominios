package br.edu.ifpb.gps.gps.repository;

import br.edu.ifpb.gps.gps.model.Residente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResidenteRepository extends JpaRepository<Residente, Long> {
}
