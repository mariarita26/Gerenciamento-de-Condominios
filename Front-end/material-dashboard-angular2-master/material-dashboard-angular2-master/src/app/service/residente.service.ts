import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Residente } from "app/interface/residente";
import { environment } from "environments/environment";
import { Observable, from } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ResidenteService {
  private readonly URL_residentes = `${environment.API}/residente`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Residente[]> {
    return this.http.get<Residente[]>(`${environment.API}/residente`);
  }

  create(residente: Residente): Observable<Residente> {
    return this.http.post<Residente>(
      `${environment.API}/residente`,
      residente
    );
  }

  update(residente: Residente): Observable<Residente> {
    const url = `${environment.API}residente/${residente.id}`;
    return this.http.put<Residente>(url, residente);
  }

  readById(id: number): Observable<Residente> {
    const url = `${environment.API}residente/${id}`;
    return this.http.get<Residente>(url);
  }

  // delete(id: number): Observable<Residente> {
  // 	const url = `${environment.API}residentes/${id}`;
  // 	return this.http.delete<Residente>(url);
  // }

  excluirResidente(id: number | undefined): Observable<object> {
    return this.http.delete(`${this.URL_residentes}/${id}`);
  }

  atualizar(residente: Residente) {
    return this.http.put(`${this.URL_residentes}/${residente.id}`, residente);
  }

  buscarResidentePorId(id: number) {
    return this.http.get<Residente>(`${this.URL_residentes}/${id}`);
  }

}
