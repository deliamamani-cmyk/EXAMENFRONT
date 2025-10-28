/**
   creando proyecto angular
   */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../core/services/empleadoservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  empleados: any[] = [];
  nuevoEmpleado: any = {};

  constructor(private empleadoService: EmpleadoService) {
    this.listarEmpleados();
  }


  listarEmpleados(): void {
    this.empleadoService.listaEmpleados().subscribe({
      next:(data)=> {
        this.empleados = data
        console.log(this.empleados);
      
      },
      error:(err)=>console.error('error al cargar productos',err)
    })

  }

  crearEmpleado(): void {
    this.empleadoService.crearEmpleado(this.nuevoEmpleado).subscribe({
      next: (data) => {
        this.empleados.push(data); // agrega el nuevo empleado a la lista
        this.nuevoEmpleado = {};   // limpia el formulario
      },
      error: (err) => console.error('Error al crear empleado', err)
    });
  }
}
