import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './cursos/componentes/form/form.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialComponent } from './cursos/componentes/material/material.component';
import { MaterialModule } from './material.module';
import { EditarModalComponent } from './cursos/componentes/editar-modal/editar-modal.component';
import { FormatoInscripcionesPipe } from './pipes/formato-inscripciones.pipe';
import { FontsizeEstiloDirective } from './directives/fontsize-estilo.directive';
import { ToolbarTituloComponent } from './core/components/toolbar-titulo/toolbar-titulo.component';
import { NavBarNavigationComponent } from './core/components/nav-bar-navigation/nav-bar-navigation.component';
import { AppRoutingModule } from './app-routing.module';;
import { PaginaInicioComponent } from './core/components/pagina-inicio/pagina-inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AgregarCursosComponent } from './cursos/componentes/agregar-cursos/agregar-cursos.component';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component'





@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MaterialComponent,
    EditarModalComponent,
    FormatoInscripcionesPipe,
    FontsizeEstiloDirective,
    ToolbarTituloComponent,
    NavBarNavigationComponent,
    LoginComponent,
    PaginaInicioComponent,
    PaginaNoEncontradaComponent,
    AgregarCursosComponent,
    ListaCursosComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
