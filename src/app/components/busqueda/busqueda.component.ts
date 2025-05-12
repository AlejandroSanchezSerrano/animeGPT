import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonGptService } from '../../services/json-gpt.service';
import { CharacterInfo } from '../../interfaces/character-info';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  personaje: string = '';
  info: CharacterInfo | null = null;
  cargando = false;
  error = false;

  constructor(private jsonGptService: JsonGptService) {}

  buscar(): void {
    if (!this.personaje.trim()) return;

    this.info = null;
    this.error = false;
    this.cargando = true;

    this.jsonGptService.getCharacterInfo(this.personaje.trim()).subscribe({
      next: (data: any) => {
        this.info = {
          character_name: data['character_name ']?.trim() || '',
          origin: data['origin ']?.trim() || '',
          species: data['species ']?.trim() || '',
          abilities: data['abilities ']?.trim() || '',
          affiliations: data['affiliations']?.trim() || '',
        };
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      },
    });
  }
}
