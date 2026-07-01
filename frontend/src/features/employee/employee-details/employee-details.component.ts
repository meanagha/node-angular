import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  private employeeService = inject(EmployeeService);

  private activatedRoute = inject(ActivatedRoute);

  employee!: Employee;

  ngOnInit(): void {

    const id = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    this.loadEmployee(id);

  }

  loadEmployee(id: number): void {

    this.employeeService
      .getEmployeeById(id)
      .subscribe({

        next: (response: any) => {
          this.employee = response[0];
        },

        error: (error) => {

          console.log(error);

        }

      });

  }

}