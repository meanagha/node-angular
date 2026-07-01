import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  //private baseUrl = 'http://localhost:3000/api/auth';

  register(user: Register): Observable<any> {

    return this.http.post(
      API_CONSTANTS.BASE_URL + API_CONSTANTS.AUTH.REGISTER,
      user
    );

  }

  login(user: Login): Observable<any> {

    return this.http.post(
      API_CONSTANTS.BASE_URL + API_CONSTANTS.AUTH.LOGIN,
      user
    );

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getProfile() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(
      API_CONSTANTS.BASE_URL + API_CONSTANTS.AUTH.PROFILE,
      { headers }
    );

  }

changePassword(data: any) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.put(
    API_CONSTANTS.BASE_URL + API_CONSTANTS.AUTH.CHANGE_PASSWORD,
    data,
    { headers }
  );

}

}