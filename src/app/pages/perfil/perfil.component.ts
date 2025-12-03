import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Programas del SENA</h1>

    <div class="card">
      <h2>Programas Técnicos y Tecnológicos</h2>
      <ul>
        <li>Análisis y Desarrollo de Software (ADSO)</li>
        <li>Gestión Empresarial</li>
        <li>Contabilidad y Finanzas</li>
        <li>Desarrollo Multimedia y Diseño Web</li>
      </ul>
    </div>

    <div class="card">
      <h2>Cursos Virtuales</h2>
      <ul>
        <li>Programación básica en Python</li>
        <li>Excel avanzado</li>
        <li>Introducción a Bases de Datos</li>
        <li>Seguridad informática</li>
      </ul>
    </div>

    <div class="card">
      <h2>Programas Cortos Presenciales</h2>
      <ul>
        <li>Marketing digital</li>
        <li>Servicio al cliente</li>
        <li>Cocina básica</li>
        <li>Redes sociales para negocios</li>
      </ul>
    </div>
  `,
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {}
