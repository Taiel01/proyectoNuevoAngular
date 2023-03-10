import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@Angular/material/dialog';
import { MatTableDataSource } from '@Angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/service/sesion.service';


import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../service/cursos.service';
import { EditarModalComponent } from '../editar-modal/editar-modal.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

cursos!: Curso[];
cursos$!: Observable<Curso[]>;
sesion$!: Observable<Sesion>

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'inscripcionAbierta','acciones'];

  constructor(private dialog: MatDialog,
     private cursoService: CursosService, 
     private sesion: SesionService, 
     private router: Router,
     ){}

     ngOnInit(){
      this.cursos$ = this.cursoService.obtenerCurso();
      this.sesion$ = this.sesion.ObtenerSesion();
      
      this.sesion.ObtenerSesion().subscribe((sesion: Sesion)=>{
        console.log(sesion);
      })
  
    }


  abrirModal(curso: Curso){
   const dialogRef = this.dialog.open(EditarModalComponent, {
    data: curso
   });


  }



}
function eliminarCurso(curso: Curso) {
  throw new Error('Function not implemented.');
}

