import { Component, OnInit } from '@angular/core';
import { PatientService, Patient } from '../../services/patient';
// 1. Importeer de modules voor forms en standaard Angular features
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-intake',
  standalone: true, // Dit geeft aan dat het een modern component is
  imports: [FormsModule, CommonModule], // Voeg de imports toe
  templateUrl: './patient-intake.html',
  styleUrl: './patient-intake.css',
})

export class PatientIntakeComponent implements OnInit {

  patients: Patient[] = [];
  
  // Het tijdelijke object dat we aan het formulier koppelen
  newPatient: Patient = {
    name: '',
    email: '',
    complaint: ''
  };

  // Injecteer de PatientService
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  onSubmit(): void {
    this.patientService.registerPatient(this.newPatient).subscribe(response => {
      console.log('Patiënt succesvol opgeslagen!', response);
      // Voeg de nieuwe patiënt toe aan de lijst op het scherm
      this.patients.push(response);
      // Maak het formulier weer leeg
      this.newPatient = { name: '', email: '', complaint: '' };
    });
  }
}