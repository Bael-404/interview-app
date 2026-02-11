package com.example.demo.event;

import com.example.demo.model.Patient;

public class PatientRegisteredEvent {

  private final Patient patient;

  public PatientRegisteredEvent(Patient patient) {
    this.patient = patient;
  }

  public Patient getPatient() {
    return patient;
  }
  
}
