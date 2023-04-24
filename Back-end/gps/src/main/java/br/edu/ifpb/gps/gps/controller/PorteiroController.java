package br.edu.ifpb.gps.gps.controller;

import br.edu.ifpb.gps.gps.model.Porteiro;
import br.edu.ifpb.gps.gps.model.Visita;
import br.edu.ifpb.gps.gps.repository.PorteiroRepository;
import br.edu.ifpb.gps.gps.repository.VisitaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/porteiro")
public class PorteiroController {
    @Autowired
    PorteiroRepository repository;
    @Autowired
    VisitaRepository visitaRepository;

    @GetMapping
    public List<Porteiro> getPorteiro() {
        return repository.findAll();
    }

    @PostMapping
    public Porteiro postPorteiro(@RequestBody Porteiro porteiro) {
        return repository.save(porteiro);
    }

    @GetMapping("/{id}")
    public Porteiro getPorteiroById(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @PutMapping("/{id}")
    public Porteiro putPorteiro(@PathVariable long id, @RequestBody Porteiro porteiro) {
        Porteiro porteiroDoBanco = repository.findById(id).get();
        porteiroDoBanco.setNome(porteiro.getNome());
        porteiroDoBanco.setCpf(porteiro.getCpf());
        porteiroDoBanco.setTelefone(porteiro.getTelefone());
        porteiroDoBanco.setEndereco(porteiro.getEndereco());
        porteiroDoBanco.setEmail(porteiro.getEmail());
        porteiroDoBanco.setSenha(porteiro.getSenha());
        return repository.save(porteiroDoBanco);
    }

    @DeleteMapping("/{id}")
    public void deletePorteiro(@PathVariable long id) {
        repository.deleteById(id);
    }

    @PostMapping("/visita")
    public Visita createVisita(@RequestBody Visita visita){
        return visitaRepository.save(visita);
    }
}
