package com.example.demo.listener;

import com.example.demo.event.PatientRegisteredEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class PatientNotificationListener {

  // Deze annotatie zorgt ervoor dat Spring weet dat deze methode moet reageren op het event
    @EventListener
    public void handlePatientRegistration(PatientRegisteredEvent event) {
        String email = event.getPatient().getEmail();
        String name = event.getPatient().getName();
        
        // In een echt project zou je hier een Mail Service aanroepen, nu printen we het in de console
        System.out.println(">>> [EVENT ONTVANGEN] Welkomstmail verzenden naar: " + email);
        System.out.println(">>> Beste " + name + ", uw klacht is geregistreerd en zal worden behandeld.");
    }
  
}
