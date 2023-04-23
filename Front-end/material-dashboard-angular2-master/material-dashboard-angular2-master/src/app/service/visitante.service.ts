import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitante } from 'app/interface/visitante';
import { environment } from 'environments/environment';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private readonly URL_visitantes = `${environment.API}/visitantes`;

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

  inserir2(novoVisitante: any) {
    return this.http.post(this.URL_visitantes, novoVisitante).pipe(take(1));
  }

  buscarVisitantePorId(id: number) {
    return this.http.get<Visitante>(`${this.URL_visitantes}/${id}`);
  }


}
