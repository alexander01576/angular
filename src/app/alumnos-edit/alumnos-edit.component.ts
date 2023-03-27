import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

interface Alumno {
  id: string;
  matricula: string;
  nombre: string;
  edad: string;
}

@Component({
  selector: 'app-alumnos-edit',
  templateUrl: './alumnos-edit.component.html',
  styleUrls: ['./alumnos-edit.component.css']
})

export class AlumnosEditComponent {

  alumno: Alumno;
  id: string | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.alumno = {
      id: "",
      matricula: "",
      nombre: "",
      edad: ""
    };
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if (this.id != "0") {
      this.http
        .get<Alumno>("http://127.0.0.1:8000/api/alumnoid/" + this.id)
        .subscribe((alumno) => {
          this.alumno = alumno;
        });
    }
  }

  onSubmit() {
    if (this.id == "0" || this.id == null) {
      this.http.post<Alumno>("http://127.0.0.1:8000/api/alumnosave", this.alumno)
        .subscribe(
          (alumnoGuardado) => {
            console.log("Alumno guardado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al guardar el alumno", error);
            alert("Ocurrió un error al guardar el alumno");
          }
        );
    } else {
      this.http.put<Alumno>("http://127.0.0.1:8000/api/alumnoupdate/" + this.alumno.id, this.alumno)
        .subscribe(
          (alumnoActualizado) => {
            console.log("Alumno actualizado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al actualizar el Alumno", error);
            alert("Ocurrió un error al actualizar el Alumno");
          }
        );
    }
  }

  eliminarAlumno(id: string) {
    if (confirm("¿Está seguro que desea eliminar este alumno?")) {
      this.http
        .delete("http://127.0.0.1:8000/api/alumnodelete/" + id)
        .subscribe(
          (data) => {
            console.log("Alumno eliminado exitosamente");
            alert("Alumno eliminado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al eliminar el Alumno", error);
            alert("Ocurrió un error al eliminar el Alumno");
          }
        );
    }
  }

  cancelar() {
    this.router.navigate(["/ad"]);
  }
}
