import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent {

  titulo = '';
  opciones: string[] = [];
  seleccionada = '';

  constructor(private com: ComunicacionService, private router: Router) {
    this.com.tituloActual.subscribe(t => this.titulo = t);
    this.com.opcionesActuales.subscribe(o => this.opciones = o);
  }

 navegar(op: string) {
  this.seleccionada = op;

  if (op === 'SENA') this.router.navigate(['/inicio']);
  if (op === 'Programas') this.router.navigate(['/perfil']);
  if (op === 'Servicios') this.router.navigate(['/configuracion']);
  
  if (op === 'Cuarta opción') return;
}
}

