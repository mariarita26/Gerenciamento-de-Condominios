package br.edu.ifpb.gps.gps.controller;


import java.util.List;

import br.edu.ifpb.gps.gps.model.Visita;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.edu.ifpb.gps.gps.model.Residente;
import br.edu.ifpb.gps.gps.repository.ResidenteRepository;
import br.edu.ifpb.gps.gps.repository.VisitaRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/residente")
public class ResidenteController {
    
    @Autowired
    ResidenteRepository repository;
    @Autowired
    VisitaRepository visitaRepository;

    @GetMapping
    public List<Residente> getResidente() {
        return repository.findAll();
    }

    @PostMapping
    public Residente postResidente(@RequestBody Residente residente) {
        return repository.save(residente);
    }

    @GetMapping("/{id}")
    public Residente getResidenteById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PutMapping("/{id}")
    public Residente putResidente(@PathVariable Long id, @RequestBody Residente residente) {
        Residente residenteDoBanco = repository.findById(id).get();
        residenteDoBanco.setNome(residente.getNome());
        residenteDoBanco.setCpf(residente.getCpf());
        residenteDoBanco.setTelefone(residente.getTelefone());
        residenteDoBanco.setEndereco(residente.getEndereco());
        residenteDoBanco.setEmail(residenteDoBanco.getEmail());
        residenteDoBanco.setSenha(residente.getSenha());
        residenteDoBanco.setCasa(residente.getCasa());
        residenteDoBanco.setBloco(residenteDoBanco.getBloco());
        residenteDoBanco.setNumero(residenteDoBanco.getNumero());
        return repository.save(residenteDoBanco);
    }

    @DeleteMapping("/{id}")
    public void deleteResidente(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PostMapping("/visita/{id}")
    public void autorizarVisita(@PathVariable Long id, @RequestBody Residente residente){
        Visita visitaDoBanco = visitaRepository.findById(id).get();
        residente.autorizarVisita(visitaDoBanco);
    }
}
