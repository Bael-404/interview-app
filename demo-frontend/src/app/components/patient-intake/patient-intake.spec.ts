import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIntake } from './patient-intake';

describe('PatientIntake', () => {
  let component: PatientIntake;
  let fixture: ComponentFixture<PatientIntake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientIntake]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientIntake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
