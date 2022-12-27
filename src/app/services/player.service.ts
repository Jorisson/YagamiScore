import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { Player } from '../model/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrlApi = environment.baseApiUrl;
  private apiUrl = `${this.baseUrlApi}/PlayerEX`;

  constructor(private http: HttpClient) { }

  createPlayer(formData: Player): Observable<Player>{
    return this.http.post<Player>(this.apiUrl, formData);    
  }

  getAll(name: string): Observable<Player>{
    const url = `${this.apiUrl}?name=${name}`;
    return this.http.get<Player>(url);
  }
}
