import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../models/curso';
import { profesor } from '../models/profesor';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{

  formulario!: FormGroup;
  curso!: Curso[];
  profesores!: profesor
  ngOnInit(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl(),
      profesor: new FormControl(),
      inscripcionAbierta: new FormControl(),
    })
  }

  agregarCurso(){
    this.curso.push(this.formulario.value)
  }
}
