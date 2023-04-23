package br.edu.ifpb.gps.gps.repository;

import br.edu.ifpb.gps.gps.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
}
