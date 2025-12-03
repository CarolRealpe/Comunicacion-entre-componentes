import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraInteraccionComponent } from './components/barra-interaccion/barra-interaccion.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { ComunicacionService } from './services/comunicacion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarraInteraccionComponent,
    BarraNavegacionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private com: ComunicacionService) {
    // 👉 ESTO ES LO QUE FALTABA
    this.com.actualizarTitulo('SENA');
    this.com.actualizarOpciones([
      'SENA',
      'Programas',
      'Servicios',
      'Ficha 3066474'
    ]);
  }
}
