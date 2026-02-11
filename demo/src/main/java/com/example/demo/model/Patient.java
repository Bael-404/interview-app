package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  //Maak de kolommen
  private String name;

  private String email;

  private String complaint;

  // Lege constructor is verplicht voor Hibernate
    public Patient() {}

    // Constructor met alle velden
    public Patient(String name, String email, String complaint) {
        this.name = name;
        this.email = email;
        this.complaint = complaint;
    }

    // Getters en Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getComplaint() {
        return complaint;
    }

    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }
}
