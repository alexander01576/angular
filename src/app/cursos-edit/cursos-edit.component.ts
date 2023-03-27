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

@Component({
  selector: "app-cursos-edit",
  templateUrl: "./cursos-edit.component.html",
  styleUrls: ["./cursos-edit.component.css"],
})
export class CursosEditComponent implements OnInit {
  curso: Curso;
  id: string | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.curso = {
      id: "",
      nombre: "",
      fecha_inicio: "",
      fecha_fin: "",
      horas: 0,
      costo: 0,
    };
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];
    if (this.id != "0") {
      this.http
        .get<Curso>("http://127.0.0.1:8000/api/curso/" + this.id)
        .subscribe((curso) => {
          this.curso = curso;
        });
    }
  }

  onSubmit() {
    if (this.id == "0" || this.id == null) {
      this.http.post<Curso>("http://127.0.0.1:8000/api/guardarcurso", this.curso)
        .subscribe(
          (cursoGuardado) => {
            console.log("Curso guardado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al guardar el curso", error);
            alert("Ocurrió un error al guardar el curso");
          }
        );
    } else {
      this.http.put<Curso>("http://127.0.0.1:8000/api/actualizarcurso/" + this.curso.id, this.curso)
        .subscribe(
          (cursoActualizado) => {
            console.log("Curso actualizado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al actualizar el curso", error);
            alert("Ocurrió un error al actualizar el curso");
          }
        );
    }
  }

  eliminarCurso(id: string) {
    if (confirm("¿Está seguro que desea eliminar este curso?")) {
      this.http
        .delete("http://127.0.0.1:8000/api/eliminarcurso/" + id)
        .subscribe(
          (data) => {
            console.log("Curso eliminado exitosamente");
            alert("Curso eliminado exitosamente");
            this.router.navigate(["/ad"]);
          },
          (error) => {
            console.error("Ocurrió un error al eliminar el curso", error);
            alert("Ocurrió un error al eliminar el curso");
          }
        );
    }
  }

  cancelar() {
    this.router.navigate(["/ad"]);
  }
}
