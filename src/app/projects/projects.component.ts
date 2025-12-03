import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { id: 1, name: 'Proyecto A' },
    { id: 2, name: 'Proyecto B' },
    { id: 3, name: 'Proyecto C' }
  ];
}
