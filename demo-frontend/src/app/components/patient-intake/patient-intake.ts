import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private patientService: PatientService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  isLoading: boolean = false;

  onSubmit(): void {
    if (this.isLoading) {
        return;
    }

    console.log('Formulier ingediend. Huidige data:', this.newPatient);
    this.isLoading = true;
    
    // Maak een kopie om referentie-problemen te voorkomen
    const patientToSave = { ...this.newPatient };

    this.patientService.registerPatient(patientToSave).subscribe({
      next: (response) => {
        console.log('Patiënt succesvol opgeslagen!', response);
        // Gebruik spread operator voor immutable update, dit helpt Angular change detection
        this.patients = [...this.patients, response];
        // Maak het formulier weer leeg
        this.newPatient = { name: '', email: '', complaint: '' };
        this.isLoading = false;
        this.cdr.detectChanges(); // Forceer view update
      },
      error: (error) => {
        console.error('Fout bij opslaan:', error);
        this.isLoading = false;
        this.cdr.detectChanges(); // Forceer view update
      }
    });
  }
}