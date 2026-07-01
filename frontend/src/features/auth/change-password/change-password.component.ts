import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  changePasswordForm = this.fb.group({

    currentPassword: [

      '',

      Validators.required

    ],

    newPassword: [

      '',

      [

        Validators.required,

        Validators.minLength(6)

      ]

    ],

    confirmPassword: [

      '',

      Validators.required

    ]

  });

  onSubmit() {
    console.log("yesssssss",this.changePasswordForm.value)
    if (this.changePasswordForm.invalid) {

      this.changePasswordForm.markAllAsTouched();

      return;

    }

    if (
      this.changePasswordForm.value.newPassword !==
      this.changePasswordForm.value.confirmPassword
    ) {

      alert('Passwords do not match');

      return;

    }

    this.authService
      .changePassword(this.changePasswordForm.value)
      .subscribe({

        next: (response:any) => {

          alert(response.message);

          this.changePasswordForm.reset();

        },

        error: (error) => {

          alert(error.error.message);

        }

      });

  }

}