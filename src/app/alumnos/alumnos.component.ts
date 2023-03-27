
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Alumno {
  id: string;
  matricula: string;
  nombre: string;
  edad: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  alumno: Alumno[];

  constructor(private http: HttpClient) {
    this.alumno = [];
  }

  ngOnInit() {
    this.http.get<Alumno[]>("http://127.0.0.1:8000/api/alumnoshow/").subscribe(
      (data) => {
        this.alumno = data;
      },
      (error) => {
        console.error("Ocurrió un error al cargar los Alumnos", error);
        alert("Ocurrió un error al cargar los Alumnos");
      }
    );
  }

  eliminarAlumno(id: string) {
    if (confirm("¿Estás seguro de eliminar este alumno?")) {
      this.http.get("http://127.0.0.1:8000/api/alumnodelete/" + id, { observe: 'response' }).subscribe(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Alumno eliminado exitosamente");
            alert("Alumno eliminado exitosamente");
            window.location.reload();
          } else {
            console.error("Ocurrió un error al eliminar el alumno");
            alert("Ocurrió un error al eliminar el alumno");
          }
        },
        (error) => {
          console.error("Ocurrió un error al eliminar el alumno", error);
          alert("Ocurrió un error al eliminar el alumno");
        }
      );
    }
  }

}
