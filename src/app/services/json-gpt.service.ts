import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterInfo } from '../interfaces/character-info';

@Injectable({
  providedIn: 'root',
})
export class JsonGptService {
  private apiUrl = 'https://api.jsongpt.com/json';

  constructor(private http: HttpClient) {}

  getCharacterInfo(personaje: string): Observable<CharacterInfo> {
    const prompt = `Generate information about ${personaje} &character_name &origin &species &abilities &affiliations`;
    const url = `${this.apiUrl}?prompt=${prompt}`; // ❗ No codificamos

    return this.http.get<CharacterInfo>(url);
  }
}
