import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosService } from './service/cursos.service';



@NgModule({
  declarations: [
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers:[
    CursosService,
  ]
})
export class CursosModule { }
