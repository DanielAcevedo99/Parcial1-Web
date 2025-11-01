import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLogged = signal<boolean>(!!localStorage.getItem('auth_ok'));

  isLogged() {
    return this._isLogged();
  }

  login(user: string, pass: string): boolean {
    const ok = (user === 'admin' && pass === '1234')
            || (user === 'admin' && pass === 'admin');

    if (ok) {
      localStorage.setItem('auth_ok', '1');
      this._isLogged.set(true);
    }
    return ok;
  }

  logout() {
    localStorage.removeItem('auth_ok');
    this._isLogged.set(false);
  }
}
