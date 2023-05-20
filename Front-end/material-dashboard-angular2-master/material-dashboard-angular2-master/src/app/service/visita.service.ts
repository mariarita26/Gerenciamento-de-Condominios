import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visita } from 'app/interface/visita';
import { environment } from 'environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private readonly URL_visitas = `${environment.API}/visita`;

  constructor(private http: HttpClient) { }

  registrarVisita(visita: Visita): Observable<any>{
      return this.http.post<any>(this.URL_visitas, visita);
  }

  getAll(): Observable<Visita[]>{
    return this.http.get<Visita[]>(`${environment.API}`);
  } 

  // getVisitasByVisitanteId(visitanteId: number): Observable<Visita[]> {
  //   return this.http.get<Visita[]>(`${environment.API}/visitantes/${visitanteId}/visitas`);
  // }

  getVisitasByVisitanteId(visitanteId: String): Observable<Visita[]> {
    return this.http.get<Visita[]>(`${environment.API}/visitantes/${visitanteId}/visitas`)
      .pipe(
        catchError((error: any) => {
          console.error('Erro ao obter visitas do visitante:', error);
          throw error;
        })
      );
  }
}
