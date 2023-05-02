package br.edu.ifpb.gps.gps.controller;

import br.edu.ifpb.gps.gps.model.Visitante;
import br.edu.ifpb.gps.gps.repository.VisitanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/visitante")
public class VisitanteController {
    @Autowired
    VisitanteRepository repository;

    @GetMapping
    public List<Visitante> getVisitante() {
        return repository.findAll();
    }

    @PostMapping
    public Visitante postVisitante(@RequestBody Visitante visitante) {
        return repository.save(visitante);
    }

    @GetMapping("/{id}")
    public Visitante getVisitanteById(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @PutMapping("/{id}")
    public Visitante putVisitante(@PathVariable long id, @RequestBody Visitante visitante) {
        Visitante visitanteDoBanco = repository.findById(id).get();
        visitanteDoBanco.setNome(visitante.getNome());
        visitanteDoBanco.setCpf(visitante.getCpf());
        visitanteDoBanco.setTelefone(visitante.getTelefone());
        visitanteDoBanco.setEndereco(visitante.getEndereco());
        return repository.save(visitanteDoBanco);
    }

    @DeleteMapping("/{id}")
    public void deleteVisitante(@PathVariable long id) {
        repository.deleteById(id);
    }
}
