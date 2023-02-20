import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  onSubmit(username: string, password: string) {
    console.log("Entro a la funcion");
    this.http.get<any>('./assets/datos/users.json').subscribe(data => {
      let found = false;
      let rol = null;
      for (let user of data.users) {
        if (user.username === username && user.password === password) {
          found = true;
          rol = user.role;
          break;
        }
      }
      if (found) {
        // Inicio de sesión exitoso
        console.log("Login successful!");
        alert("Sesion iniciada como:  " + rol + ' -> ' + username  );

      } else {
        // Inicio de sesión fallido
        console.log("Login failed.");
        alert("Error en el inicio de sesion");
      }
    }, error => {
      console.log("Error en la petición:", error);
      alert("Error en la petición, inténtelo de nuevo más tarde.");
    });
  }
  



}
