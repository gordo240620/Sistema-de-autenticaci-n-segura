import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private token = 'TOKEN_DE_EJEMPLO';

  login(correo: string, password: string): boolean {

    if (correo === 'admin@test.com' && password === '12345678') {

      localStorage.setItem('token', this.token);

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

}