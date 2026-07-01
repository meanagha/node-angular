import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {

  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.group({

    first_name: ['', Validators.required],
    last_name: ['', ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    department: ['', Validators.required],

    designation: ['', Validators.required],

    salary: [
      '',
      [
        Validators.required,
        Validators.min(1)
      ]
    ]

  });

  onSubmit(): void {

    if (this.employeeForm.invalid) {

      this.employeeForm.markAllAsTouched();

      return;

    }

    this.employeeService
      .addEmployee(this.employeeForm.value as any)
      .subscribe({

        next: (response: any) => {
console.log(this.employeeForm.value)
          alert(response.message);

          this.router.navigate(['/dashboard/employees']);

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

  }

}