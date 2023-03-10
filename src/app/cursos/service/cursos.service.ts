import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'src/app/environment';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  

  constructor(
    private http: HttpClient
  ) { 

  }
  obtenerCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiUrl}/cursos`)
  }
  agregarCurso(curso: Curso){

  }
  editarCurso(curso: Curso): void{

  }
  eliminarCurso(curso: Curso): void{
    this.http.delete<Curso>(`${env.apiUrl}/cursos/${curso.id}`);
  }

}
