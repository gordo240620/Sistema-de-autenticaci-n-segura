import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  correo: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  iniciarSesion(): void {

    const acceso = this.auth.login(this.correo, this.password);

    if (acceso) {
      this.router.navigate(['/dashboard']);
    } else {
      this.mensaje = 'Correo o contraseña incorrectos';
    }

  }

}