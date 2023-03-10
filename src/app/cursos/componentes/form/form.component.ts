import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formularioLogin : FormGroup;

  constructor(){
    let correoValidador: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controles: any = {
      correo: new FormControl('', [Validators.required, Validators.pattern(correoValidador)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(4)]),
      esAdmin: new FormControl('', []),
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login(){
    alert("logeado!")
  }
}
