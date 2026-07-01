import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  nombre = '';
  correo = '';
  password = '';
  confirmarPassword = '';

  registrar() {

    console.log(this.nombre);
    console.log(this.correo);
    console.log(this.password);
    console.log(this.confirmarPassword);

  }

}