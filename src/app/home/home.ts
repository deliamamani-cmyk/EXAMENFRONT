import { Component } from '@angular/core';
import { Empleadoservice } from '../core/services/empleadoservice'; // ✅ Nombre corregido si es necesario
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  empleados: any[] = [];
  mostrarForm = false;

  // Objeto para los datos del nuevo empleado (todos string)
  nuevoEmpleado = {
    nombre: '',
    apellido: '',
    correo: '',
    salario: '',
    empleado_id: ''
  };

  constructor(private empleadoService: Empleadoservice) {
    this.listarEmpleados();
  }

  listarEmpleados(): void {
    this.empleadoService.listaEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
        console.log('Empleados cargados:', this.empleados);
      },
      error: (err) => console.error('Error al cargar empleados', err)
    });
  }

  mostrarFormulario() {
    this.mostrarForm = true;
    this.nuevoEmpleado = { 
      nombre: '', 
      apellido: '', 
      correo: '', 
      salario: '', 
      empleado_id: '' 
    };
  }

  cancelar() {
    this.mostrarForm = false;
  }

  guardarEmpleado() {
    // Validación básica: todos deben tener contenido
    if (
      !this.nuevoEmpleado.nombre.trim() ||
      !this.nuevoEmpleado.apellido.trim() ||
      !this.nuevoEmpleado.correo.trim() ||
      !this.nuevoEmpleado.salario.trim() ||
      !this.nuevoEmpleado.empleado_id.trim()
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // ✅ Conversión de salario a número (asumiendo que es numérico en la API)
    const salarioStr = this.nuevoEmpleado.salario.replace(',', '.');
    const salario = parseFloat(salarioStr);
    const empleado_id = parseInt(this.nuevoEmpleado.empleado_id.trim(), 10);

    if (isNaN(salario) || salario <= 0) {
      alert('El salario debe ser un número válido mayor que 0.');
      return;
    }

    if (isNaN(empleado_id) || empleado_id <= 0) {
      alert('El ID de empleado debe ser un número entero mayor que 0.');
      return;
    }

    // ✅ Objeto final para enviar (solo campos necesarios)
    const empleadoParaEnviar = {
      nombre: this.nuevoEmpleado.nombre.trim(),
      apellido: this.nuevoEmpleado.apellido.trim(),
      correo: this.nuevoEmpleado.correo.trim(),
      salario: salario,
      empleado_id: empleado_id
    };

    this.empleadoService.crearEmpleado(empleadoParaEnviar).subscribe({
      next: (response) => {
        alert('✅ Empleado guardado correctamente!');
        this.mostrarForm = false;
        this.listarEmpleados(); // ✅ Recargar la lista
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
        alert('❌ Error al guardar el empleado');
      }
    });
  }
}