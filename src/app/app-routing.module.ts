import { NgModule } from '@angular/core';
import { PaginaInicioComponent } from './core/components/pagina-inicio/pagina-inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './autenticacion/components/login/login.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: PaginaInicioComponent},
  {path: 'cursos', loadChildren: ()=> import('./cursos/cursos.module').then((modulo) => modulo.CursosModule)},
  //{path: 'auth', loadChildren:()=> import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)},
  {path: '', redirectTo: 'inicio', pathMatch: 'prefix'},
  {path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
