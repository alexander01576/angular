import { Component, OnInit } from "@angular/core";
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
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  cursos: Curso[];

  constructor(private http: HttpClient) {
    this.cursos = [];
  }

  ngOnInit() {
    this.http.get<Curso[]>("http://127.0.0.1:8000/api/mostrarcurso").subscribe(
      (data) => {
        this.cursos = data;
      },
      (error) => {
        console.error("Ocurrió un error al cargar los cursos", error);
        alert("Ocurrió un error al cargar los cursos");
      }
    );
  }

  eliminarCurso(id: string) {
    if (confirm("¿Estás seguro de eliminar este curso?")) {
      this.http.get("http://127.0.0.1:8000/api/eliminarcurso/" + id, { observe: 'response' }).subscribe(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Curso eliminado exitosamente");
            alert("Curso eliminado exitosamente");
            window.location.reload();
          } else {
            console.error("Ocurrió un error al eliminar el curso");
            alert("Ocurrió un error al eliminar el curso");
          }
        },
        (error) => {
          console.error("Ocurrió un error al eliminar el curso", error);
          alert("Ocurrió un error al eliminar el curso");
        }
      );
    }
  }

}
