import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private tituloSource = new BehaviorSubject<string>('Sección A');
  tituloActual = this.tituloSource.asObservable();

  private opcionesSource = new BehaviorSubject<string[]>([
    'SENA',
    'Programas',
    'Servicios',
    'Cuarta opción'
  ]);
  opcionesActuales = this.opcionesSource.asObservable();

  actualizarTitulo(titulo: string) {
    this.tituloSource.next(titulo);
  }

  actualizarOpciones(opciones: string[]) {
    this.opcionesSource.next(opciones);
  }
}
