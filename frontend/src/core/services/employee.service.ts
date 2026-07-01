import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_CONSTANTS } from '../constants/api.constants';
import { Employee } from '../models/employee.model';

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


  addEmployee(employee: Employee) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.post(
    API_CONSTANTS.BASE_URL + API_CONSTANTS.EMPLOYEE.ADD,
    employee,
    { headers }
  );

}

getEmployeeById(id: number) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.get(
    API_CONSTANTS.BASE_URL +
    API_CONSTANTS.EMPLOYEE.GET_BY_ID +
    '/' +
    id,
    { headers }
  );

}

updateEmployee(id: number, employee: Employee) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.put(
    API_CONSTANTS.BASE_URL +
    API_CONSTANTS.EMPLOYEE.UPDATE +
    '/' +
    id,
    employee,
    { headers }
  );

}

deleteEmployee(id: number) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.delete(

    API_CONSTANTS.BASE_URL +
    API_CONSTANTS.EMPLOYEE.DELETE +
    '/' +
    id,

    { headers }

  );

}
}