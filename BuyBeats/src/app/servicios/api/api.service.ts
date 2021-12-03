/* Servicio para conectarnos a la API GET, POST, PUT, DELETE */
import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost/API/Api_Rest/"
  constructor(private http:HttpClient) {}

  loginByEmail(form: LoginI):Observable<ResponseI>{
  let direccion = this.url + "auth";
   return this.http.post<ResponseI>(direccion, form);
}
}
