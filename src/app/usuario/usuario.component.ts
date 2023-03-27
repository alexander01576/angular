import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  matricula: string | undefined;
  resultado: any;
  datosDisponibles: boolean = false;

  constructor(private http: HttpClient) { }

  consultarMatricula() {
    this.http.get('http://127.0.0.1:8000/api/alumno/' + this.matricula).subscribe(
      (response) => {
        this.resultado = response;
        console.log(this.resultado);
        this.datosDisponibles = true;
      },
      (error) => {
        console.log(error);
        this.datosDisponibles = false;
      }
    );
  }
}