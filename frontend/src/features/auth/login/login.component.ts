import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router ,RouterLink} from '@angular/router';
import { Login } from '../../../core/models/login.model';
import { StorageHelper } from '../../../core/helpers/storage.helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  loginForm!: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });
  }


  login(): void {

  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    return;

  }

  this.authService
      .login(this.loginForm.value as Login)
      .subscribe({

        next: (response) => {

          StorageHelper.setToken(response.token);

          alert('Login Successful');

          this.router.navigate(['/dashboard']);

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

}
}
