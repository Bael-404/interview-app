import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// De interface die exact overeenkomt met ons Java Patient model
export interface Patient {
  id?: number;
  name: string;
  email: string;
  complaint: string;
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  // Dit is de URL van onze draaiende Spring Boot backend
  private apiUrl = 'http://localhost:8080/api/patients';

  constructor(private http: HttpClient) { }

  // POST request om een patiënt op te slaan
  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // GET request om alle patiënten op te halen
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
  
}
