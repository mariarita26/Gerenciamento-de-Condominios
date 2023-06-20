import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Visita } from 'app/interface/visita';
import { environment } from 'environments/environment';
import { Observable, catchError, from } from 'rxjs';



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
    return this.http.get<Visita[]>(this.URL_visitas);
  } 

  getVisitasByVisitanteId(visitanteId: number): Observable<Visita[]> {
    return this.http.get<Visita[]>(`${environment.API}/visitantes/${visitanteId}/visitas`)
      .pipe(
        catchError((error: any) => {
          console.error('Erro ao obter visitas do visitante:', error);
          throw error;
        })
      );
  }

  getVisitasPorPorteiro(idPorteiro: string): Observable<Visita[]> {
    const url = `${environment.API}?porteiroId=${idPorteiro}`;
    return this.http.get<Visita[]>(url);
  }
}
