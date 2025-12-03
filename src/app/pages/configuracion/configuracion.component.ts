import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Servicios del SENA</h1>

    <div class="card">
      <h2>Servicios para Aprendices</h2>
      <ul>
        <li>Bienestar al Aprendiz (salud, apoyo psicológico, recreación)</li>
        <li>Biblioteca y salas de estudio</li>
        <li>Acompañamiento académico personalizado</li>
        <li>Acceso a ambientes de formación especializados</li>
      </ul>
    </div>

    <div class="card">
      <h2>Servicios para Empresas</h2>
      <ul>
        <li>Fondo Emprender</li>
        <li>Formación especializada a empresas</li>
        <li>Certificación de Competencias Laborales</li>
        <li>Alianzas con el sector productivo</li>
      </ul>
    </div>
  `,
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent {}
