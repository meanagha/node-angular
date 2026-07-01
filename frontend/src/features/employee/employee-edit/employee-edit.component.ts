import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  private fb = inject(FormBuilder);

  private employeeService = inject(EmployeeService);

  private router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);

  employeeId!: number;

  employeeForm = this.fb.group({

    first_name: ['', Validators.required],
    last_name: [''],

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
      Validators.required
    ]

  });

  ngOnInit(): void {

    this.employeeId = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    this.loadEmployee();

  }

  loadEmployee(): void {

    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe({

        next: (response: any) => {
          console.log("sdsdsdsd",response[0])
          this.employeeForm.patchValue(response[0]);

        },

        error: (error) => {

          console.log(error);

        }

      });

  }

  updateEmployee(): void {

    if (this.employeeForm.invalid) {

      this.employeeForm.markAllAsTouched();

      return;

    }

    this.employeeService
      .updateEmployee(
        this.employeeId,
        this.employeeForm.value as any
      )
      .subscribe({

        next: (response: any) => {

          alert(response.message);

          this.router.navigate([
            '/dashboard/employees'
          ]);

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

  }

}