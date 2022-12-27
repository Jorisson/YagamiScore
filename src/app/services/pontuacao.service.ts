import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

import { Pontuacao } from '../model/Pontuacao'

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {
  private baseUrlApi = environment.baseApiUrl;
  private apiUrl = `${this.baseUrlApi}/Player`;

  constructor(private http: HttpClient) { }

  createPontuacao(formData: Pontuacao): Observable<Pontuacao>{
    return this.http.post<Pontuacao>(this.apiUrl, formData);    
  }

  getAll(): Observable<Pontuacao[]>{
    return this.http.get<Pontuacao[]>(this.apiUrl);
  }
}
