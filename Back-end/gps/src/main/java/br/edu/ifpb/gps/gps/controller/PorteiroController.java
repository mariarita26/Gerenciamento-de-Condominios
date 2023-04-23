package br.edu.ifpb.gps.gps.controller;

import br.edu.ifpb.gps.gps.model.Porteiro;
import br.edu.ifpb.gps.gps.model.Usuario;
import br.edu.ifpb.gps.gps.repository.PorteiroRepository;
import br.edu.ifpb.gps.gps.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class PorteiroController {
    PorteiroRepository repository;

    @GetMapping("/usuario/porteiro")
    public List<Porteiro> getPorteiro() {
        return repository.findAll();
    }

    @PostMapping("/usuario/porteiro")
    public Porteiro postPorteiro(@RequestBody Porteiro porteiro) {
        return repository.save(porteiro);
    }

    @GetMapping("/usuario/porteiro/{id}")
    public Porteiro getPorteiroById(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @PutMapping("/usuario/porteiro/{id}")
    public Porteiro putPorteiro(@PathVariable long id, @RequestBody Porteiro porteiro) {
        Porteiro usuarioDoBanco = repository.findById(id).get();
        usuarioDoBanco.setNome(porteiro.getNome());
        usuarioDoBanco.setCpf(porteiro.getCpf());
        usuarioDoBanco.setTelefone(porteiro.getTelefone());
        usuarioDoBanco.setEndereco(porteiro.getEndereco());
        usuarioDoBanco.setEmail(porteiro.getEmail());
        usuarioDoBanco.setSenha(porteiro.getSenha());
        return repository.save(usuarioDoBanco);
    }

    @DeleteMapping("/usuario/porteiro/{id}")
    public void deletePorteiro(@PathVariable long id) {
        repository.deleteById(id);
    }
}
