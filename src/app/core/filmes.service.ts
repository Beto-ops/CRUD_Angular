import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';
import { ConfigPrams } from '../shared/models/config-prams';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  excluir(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }
}
