import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { UsuarioComponent } from './usuario/usuario.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosEditComponent } from './cursos-edit/cursos-edit.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnosEditComponent } from './alumnos-edit/alumnos-edit.component';
import { CursosalumnoComponent } from './cursosalumno/cursosalumno.component';
import { CursoalumnoEditComponent } from './cursoalumno-edit/cursoalumno-edit.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes = [
  { path: '', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'us', component: UsuarioComponent },
  { path: 'ad', component: AdministracionComponent },
  { path: 'cursosEdit', component: CursosEditComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnosEdit', component: AlumnosEditComponent },
  { path: 'cursoalumno-edit', component: CursoalumnoEditComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    AdministracionComponent,
    CursosComponent,
    CursosEditComponent,
    AlumnosComponent,
    AlumnosEditComponent,
    CursosalumnoComponent,
    CursoalumnoEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
