package com.qpa.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qpa.entity.Vehicle;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/vehicles")
public class VehicleController {
    @PostMapping("/save")
    public ResponseEntity<String> addVehicle(@Valid @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok("Vehicle details are valid and saved successfully!");
    }
}
