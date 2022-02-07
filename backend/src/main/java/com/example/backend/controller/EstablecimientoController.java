package com.example.backend.controller;

import com.example.backend.model.Establecimiento;
import com.example.backend.repository.EstablecimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EstablecimientoController {


    @Autowired
    private EstablecimientoRepository establecimientoRepository;

    @GetMapping("/list")
    public List<Establecimiento> getAllEstablecimiento() {

        return establecimientoRepository.findAll() ;
    }

    @PostMapping("/create")
    public Establecimiento create(  @RequestBody Establecimiento establecimiento) {
        return establecimientoRepository.save(establecimiento);
    }

}
