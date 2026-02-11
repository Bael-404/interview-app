import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientIntakeComponent } from './components/patient-intake/patient-intake';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PatientIntakeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-frontend');
}
