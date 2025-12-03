import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-barra-interaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-interaccion.component.html',
  styleUrls: ['./barra-interaccion.component.scss']
})
export class BarraInteraccionComponent {

  seleccionado = 1;

  constructor(private com: ComunicacionService) {}

  cambiarVista(num: number) {
    this.seleccionado = num;

    if (num === 1) {
      this.com.actualizarTitulo('Sección A');
      this.com.actualizarOpciones(['Inicio', 'Perfil', 'Configuración', 'Extra1', 'Extra2']);
    }
    if (num === 2) {
      this.com.actualizarTitulo('Sección B');
      this.com.actualizarOpciones(['Dashboard', 'Usuarios', 'Reportes', 'Extra1', 'Extra2']);
    }
    if (num === 3) {
      this.com.actualizarTitulo('Sección C');
      this.com.actualizarOpciones(['Favoritos', 'Ajustes', 'Seguridad', 'Extra1', 'Extra2']);
    }
  }
}
