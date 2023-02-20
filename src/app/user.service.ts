import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Método para leer los datos de los usuarios del archivo JSON estático
  // getUsers() {
  //   return this.http.get('/assets/users.json');
  // }


  getUsers(): Observable<{ username: string, password: string }[]> {
    return this.http.get<{ username: string, password: string }[]>('./assets/datos/users.json');
  }
  
  // // Método para escribir los datos de los usuarios en el archivo JSON estático
  // addUser(user) {
  //   // Aquí puedes agregar la lógica para escribir los datos del usuario en el archivo JSON estático
  // }
}
