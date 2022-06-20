import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Store } from '../interface/stores.interface';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {

  }
  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores`)
  }
  saveOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/orders`, order);
  }
  //this.Obtener_localStorage(); 

  obtenerUsuarios_LocalStorage() {

    const nombre = localStorage.getItem("nombre");
    const persona = JSON.parse(localStorage.getItem("persona") || "[]");

    console.log(nombre);
    console.log(persona);
  }

  guardarUsuarios_LocalStorage_() {

    const nombre: string = '';

    const persona = {
      nombre: '',
      edad: '',
      email: ''
    }
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
  }
}


