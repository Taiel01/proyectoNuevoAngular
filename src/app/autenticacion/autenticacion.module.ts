import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AutenticacionRoutingModule } from './autenticacion-routin.module';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
declarations:[
    AutenticacionInicioComponent,
],
imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AutenticacionRoutingModule,
    LoginComponent,
    
]
})
export class AutenticacionModule {}