import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  getEmployees() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

    return this.http.get(

      API_CONSTANTS.BASE_URL +
      API_CONSTANTS.EMPLOYEE.GET_ALL,

      { headers }

    );

  }

}