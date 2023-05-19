import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visita } from 'app/interface/visita';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private readonly URL_visitas = `${environment.API}/visita`;

  constructor(private http: HttpClient) { }

  registrarVisita(visita: Visita): Observable<any>{
      return this.http.post<any>(this.URL_visitas, visita);
  }
  
}
