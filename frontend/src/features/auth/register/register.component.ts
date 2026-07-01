import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import {Roles} from '../../../core/enum/roles.enum';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm!: FormGroup;

  constructor() {

    this.registerForm = this.fb.group({

      name: ['', Validators.required],

      email: ['',[ Validators.required, Validators.email ]],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      role: [
        Roles.ADMIN,
        Validators.required
      ]

    });

  }

  onSubmit() {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log("data===", this.registerForm.value)

    this.authService.register(this.registerForm.value)
      .subscribe({

        next: (response) => {
          console.log("responseeee..", response)
          alert(response.message);

          this.registerForm.reset();

          this.router.navigate(['/login']);

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

  }

}