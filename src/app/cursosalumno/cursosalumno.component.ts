import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Cursosalumnoss {
  id: string;
  alumno_id: string;
  curso_id: string;
  calificacion: string;
}

@Component({
  selector: 'app-cursosalumno',
  templateUrl: './cursosalumno.component.html',
  styleUrls: ['./cursosalumno.component.css']
})
export class CursosalumnoComponent implements OnInit {
  cursosalumno: Cursosalumnoss[];

  constructor(private http: HttpClient){
    this.cursosalumno = [];
  }

  ngOnInit() {
    this.http.get<Cursosalumnoss[]>("http://127.0.0.1:8000/api/mostrarac").subscribe(
      (data) => {
        this.cursosalumno = data;
        
      },
      (error) => {
        console.error("Ocurrió un error al cargar los datos", error);
        alert("Ocurrió un error al cargar los datos");
      }
    );
  }


}
