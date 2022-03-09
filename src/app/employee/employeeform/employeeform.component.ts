import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css'],
})
export class EmployeeformComponent implements OnInit {
  employeeForm!: FormGroup;
  status: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.employeeForm = this.fb.group({
      employeeName: new FormControl('', Validators.required),
      employeeEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      employeePhone: [
        '',
        [Validators.required, Validators.pattern('[7-9]{1}[0-9]{9}')],
      ],
      employeeDOB: new FormControl('', Validators.required),
      employeeAddress: this.fb.group({
        employeeStreet: new FormControl('', Validators.required),
        employeeCity: new FormControl('', Validators.required),
        employeeState: new FormControl('', Validators.required),
        employeeCountry: new FormControl('', Validators.required),
      }),
    });
  }

  onSubmit(): void {
    if (this.employeeForm.status === 'VALID') {
      this.status = false;
      console.log(this.employeeForm.value);
      alert('form data is valid, check console for output');
    } else {
      this.status = true;
    }
  }
}
