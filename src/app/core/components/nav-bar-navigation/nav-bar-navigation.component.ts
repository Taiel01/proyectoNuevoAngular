import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../service/sesion.service';

@Component({
  selector: 'app-nav-bar-navigation',
  templateUrl: './nav-bar-navigation.component.html',
  styleUrls: ['./nav-bar-navigation.component.css']
})
export class NavBarNavigationComponent {

  constructor(
    private router: Router,
    private sesion: SesionService,
    ){
    
  }

  redirigirInicio(){
    this.router.navigate(['inicio', {mensaje: 'a123'}])
  }

  redirigirLogin(){
    this.router.navigate(['login'])
  }

  redirigirCursos(){
    this.router.navigate(['cursos'])
  }

  logout(){
    let sesionLogout: Sesion ={
      sesionActiva: false
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login'])
  }
}
