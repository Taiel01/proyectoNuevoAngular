import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarCursosComponent } from './componentes/agregar-cursos/agregar-cursos.component';
import { EditarCursoComponent } from './componentes/editar-curso/editar-curso.component';
import { MaterialComponent } from './componentes/material/material.component';


const routes: Routes = [
  {path: 'cursos', canActivateChild: [SesionGuard],children: [
    {path: 'listar', component: MaterialComponent},
    {path: 'editar', component: EditarCursoComponent, canActivate: [AdminGuard]},
    {path: 'agregar', component: AgregarCursosComponent, canActivate: [AdminGuard]},
  ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }