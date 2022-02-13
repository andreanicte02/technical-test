package com.example.backend.controller;

import com.example.backend.model.Establecimiento;
import com.example.backend.repository.EstablecimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class EstablecimientoController {


    @Autowired
    private EstablecimientoRepository establecimientoRepository;


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/establecimiento")
    public List<Establecimiento> getAllEstablecimiento() {

        return establecimientoRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/establecimiento")
    public Establecimiento create(@RequestBody Establecimiento establecimiento) {
        return establecimientoRepository.save(establecimiento);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/establecimiento/{id}")
    public ResponseEntity<Establecimiento> updateEstablecimiento(
            @PathVariable(value = "id") int establecimientoId, @RequestBody Establecimiento establecimiento) throws Exception {

        Establecimiento auxEstablecimiento =
                establecimientoRepository
                        .findById(establecimientoId).orElseThrow(()-> new Exception("error"));

        auxEstablecimiento.setNombre(establecimiento.getNombre());
        auxEstablecimiento.setTelefono(establecimiento.getTelefono());
        auxEstablecimiento.setUbicacion(establecimiento.getUbicacion());

        final Establecimiento updatedEstablecimiento = establecimientoRepository.save(auxEstablecimiento);
        return ResponseEntity.ok(updatedEstablecimiento);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/establecimiento/{id}")
    public Map<String, Boolean> deleteEstablecimiento(@PathVariable(value = "id") int establecimientoId) throws Exception {
        Establecimiento auxEst =
                establecimientoRepository
                        .findById(establecimientoId)
                        .orElseThrow(() -> new Exception("error"));

        establecimientoRepository.delete(auxEst);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
