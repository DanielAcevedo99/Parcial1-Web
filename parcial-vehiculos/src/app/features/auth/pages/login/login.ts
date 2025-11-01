import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  error = '';

  form = this.fb.group({
    user: ['', [Validators.required]],
    pass: ['', [Validators.required, Validators.minLength(4)]],
  });

  submit() {
    this.error = '';
    const { user, pass } = this.form.value;
    if (!this.form.valid || !user || !pass) return;

    const ok = this.auth.login(user, pass);
    if (ok) this.router.navigateByUrl('/vehiculos');
    else this.error = 'Error de autenticación. Revise sus credenciales';
  }

  cancelar() {
    this.form.reset();
    this.error = '';
  }
}
