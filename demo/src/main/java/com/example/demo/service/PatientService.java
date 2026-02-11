package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.event.PatientRegisteredEvent;
import com.example.demo.reposetory.PatientRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    private final PatientRepository repository;
    private final ApplicationEventPublisher eventPublisher;

    // Via de constructor injecteert Spring automatisch de Repository en de EventPublisher
    public PatientService(PatientRepository repository, ApplicationEventPublisher eventPublisher) {
        this.repository = repository;
        this.eventPublisher = eventPublisher;
    }
    public Patient registerPatient(Patient patient) {
        // 1. Sla de patiënt op in de SQL database via Hibernate
        Patient savedPatient = repository.save(patient);
        
        // 2. Publiceer het event (Dit is de EDA praktijk!)
        System.out.println("--- Systeem: Patiënt succesvol opgeslagen in Database. Event wordt nu afgevuurd ---");
        eventPublisher.publishEvent(new PatientRegisteredEvent(savedPatient));
        
        return savedPatient;
    }
}
