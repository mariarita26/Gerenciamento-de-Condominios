package br.edu.ifpb.gps.gps.controller;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.gps.gps.model.Usuario;
import br.edu.ifpb.gps.gps.repository.UsuarioRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuarioController {
    
    
    UsuarioRepository repository;

    @GetMapping("/usuario")
    public List<Usuario> getUsuario() {
        return repository.findAll();
    } 

    @PostMapping("/usuario")
    public Usuario postUsuario(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }

    @GetMapping("/usuario/{id}")
    public Usuario getUsuarioById(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @PutMapping("/usuario/{id}")
    public Usuario putUsuario(@PathVariable long id, @RequestBody Usuario usuario) {
        Usuario usuarioDoBanco = repository.findById(id).get();
        usuarioDoBanco.setNome(usuario.getNome());
        usuarioDoBanco.setIdade(usuario.getIdade());
        usuarioDoBanco.setEmail(usuario.getEmail());
        usuarioDoBanco.setSenha(usuario.getSenha());
        return repository.save(usuarioDoBanco);
    }

    @DeleteMapping("/usuario/{id}")
    public void deleteUsuario(@PathVariable long id) {
        repository.deleteById(id);
    }
}
