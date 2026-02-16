package com.example.demo.controller;

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
import com.example.demo.reposetory.PatientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController // Web verzoeken en omzetten naar JSON
@RequestMapping("/api/patients") // kan ook op de post en get mapping gebeuren
@CrossOrigin(origins = "http://localhost:4200") // Belangrijk voor Angular!

public class PatientController {

  private final PatientService patientService;
  private final PatientRepository patientRepository;

  public PatientController(PatientService patientService, PatientRepository patientRepository) {
    this.patientService = patientService;
    this.patientRepository = patientRepository;
  }

  // POST endpoint: Hiermee slaat Angular een nieuwe patiënt op
  @PostMapping
  public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient) {
    Patient savedPatient = patientService.registerPatient(patient);
    return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
  }

  // GET endpoint: Hiermee kan Angular een lijst van alle patiënten ophalen
    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }
  
}
