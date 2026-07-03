import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  nombre: string = '';
  correo: string = '';
  password: string = '';
  confirmarPassword: string = '';

  mensajeError: string = '';
  mensajeExito: string = '';

  registrar(): void {

    this.mensajeError = '';
    this.mensajeExito = '';

    if (
      !this.nombre ||
      !this.correo ||
      !this.password ||
      !this.confirmarPassword
    ) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(this.correo)) {
      this.mensajeError = 'Ingrese un correo válido.';
      return;
    }

    if (this.password.length < 8) {
      this.mensajeError = 'La contraseña debe tener al menos 8 caracteres.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.mensajeError = 'Las contraseñas no coinciden.';
      return;
    }

    this.mensajeExito = 'Usuario registrado correctamente.';

    this.nombre = '';
    this.correo = '';
    this.password = '';
    this.confirmarPassword = '';

  }

}