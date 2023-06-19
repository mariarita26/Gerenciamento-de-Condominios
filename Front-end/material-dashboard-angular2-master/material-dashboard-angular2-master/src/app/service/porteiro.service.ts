import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Porteiro } from "app/interface/porteiro";
import { environment } from "environments/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class PorteiroService {
  private readonly URL_porteiros = `${environment.API}/porteiro`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Porteiro[]> {
    return this.http.get<Porteiro[]>(`${environment.API}/porteiro`);
  }

  create(porteiro: Porteiro): Observable<Porteiro> {
    return this.http.post<Porteiro>(`${environment.API}/porteiro`, porteiro);
  }

  excluirPorteiro(id: number | undefined): Observable<object> {
    return this.http.delete(`${this.URL_porteiros}/${id}`);
  }

  atualizar(porteiro: Porteiro) {
    return this.http.put(`${this.URL_porteiros}/${porteiro.id}`, porteiro);
  }

  buscarPorteiroPorId(id: number) {
    return this.http.get<Porteiro>(`${this.URL_porteiros}/${id}`);
  }
}
