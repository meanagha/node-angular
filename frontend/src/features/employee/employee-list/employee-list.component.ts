import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  private employeeService = inject(EmployeeService);

  employees: Employee[] = [];

  ngOnInit(): void {

    this.loadEmployees();

  }

  loadEmployees(): void {

    this.employeeService
      .getEmployees()
      .subscribe({
        next: (response: any) => {
          this.employees = response;
        },

        error: (error) => {

          console.log(error);

        }

      });

  }

  deleteEmployee(id: number): void {
  const isConfirmed = confirm(
    'Are you sure you want to delete this employee?'
  );

  if (!isConfirmed) {
    return;
  }

  this.employeeService
      .deleteEmployee(id)
      .subscribe({

        next: (response: any) => {

          alert(response.message);

          this.loadEmployees();

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

}

}