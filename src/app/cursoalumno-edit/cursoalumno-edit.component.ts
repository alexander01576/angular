import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
interface Curso {
  id: string;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  horas: number;
  costo: number;
}

interface Alumno {
  id: string;
  matricula: string;
  nombre: string;
  edad: string;
}

@Component({
  selector: 'app-cursoalumno-edit',
  templateUrl: './cursoalumno-edit.component.html',
  styleUrls: ['./cursoalumno-edit.component.css']
})

export class CursoalumnoEditComponent implements OnInit {
  formularioCalificacion: any = {};

  cursos: Curso[];
  alumnos: Alumno[];
  alumno_id: string;
  curso_id: string;
  calificacion: null;

  constructor(private http: HttpClient,
    private router: Router) {
    this.cursos = [];
    this.alumnos = [];
    this.alumno_id = "";
    this.curso_id = "";
    this.calificacion = null;
  }

  ngOnInit() {
    this.getCursos();
    this.getAlumnos();
  }

  getCursos() {
    this.http.get<Curso[]>("http://127.0.0.1:8000/api/mostrarcurso").subscribe(
      (data) => {
        this.cursos = data;
        console.log(this.cursos);
      },
      (error) => {
        console.error("Ocurrió un error al cargar los datos de los cursos", error);
        alert("Ocurrió un error al cargar los datos de los cursos");
      }
    );
  }

  getAlumnos() {
    this.http.get<Alumno[]>("http://127.0.0.1:8000/api/alumnoshow").subscribe(
      (data) => {
        this.alumnos = data;
        console.log(this.alumnos);
      },
      (error) => {
        console.error("Ocurrió un error al cargar los datos de los alumnos", error);
        alert("Ocurrió un error al cargar los datos de los alumnos");
      }
    );
  }

  agregarCalificacion() {
    if (this.curso_id && this.alumno_id && this.calificacion) {
      const data = {
        alumno_id: this.curso_id,
        curso_id: this.alumno_id,
        calificacion: this.calificacion
      };
      this.http.post('http://127.0.0.1:8000/api/guardarac', data).subscribe(
        (response) => {
          console.log(response);
          alert("Calificación agregada correctamente");
          this.router.navigate(["/ad"]);
        },
        (error) => {
          console.error(error);
          alert("Ocurrió un error al agregar la calificación");
          this.router.navigate(["/ad"]);
        }
      );
    } else {
      alert("Por favor, completa todos los campos");
    }
  }
}