import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empleadoservice {
  // ✅ CORRECTO: puerto 8000 (Laravel)
  private apiUrl = 'http://localhost:8000/api/empleados';

  constructor(private http: HttpClient) {}

  listaEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, empleado);
  }
}