import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageHelper } from '../../core/helpers/storage.helper';

export const authGuard: CanActivateFn = () => {

  //const authService = inject(AuthService);
  const router = inject(Router);

  if (StorageHelper.getToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const loginGuard: CanActivateFn = () => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {

    router.navigate(['/dashboard']);

    return false;

  }

  return true;

};