import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitante } from 'app/interface/visitante';
import { environment } from 'environments/environment';
import { Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private readonly URL_visitantes = `${environment.API}/visitante`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Visitante[]>(this.URL_visitantes);
  }

  atualizar(visitante: Visitante) {
    return this.http.put(`${this.URL_visitantes}/${visitante.id}`, visitante);
  }

  inserir(novoVisitante: Visitante) {
    return this.http.post<Visitante>(this.URL_visitantes, novoVisitante);
  }

  buscarVisitantePorId(id: number) {
    return this.http.get<Visitante>(`${this.URL_visitantes}/${id}`);
  }

  excluirVisitante(id: number | undefined): Observable<object>{
    return this.http.delete(`${this.URL_visitantes}/${id}`);
  }
}
