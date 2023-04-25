import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residente } from 'app/interface/residente';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenteService {

  constructor(
		private http: HttpClient,
	) { }

	getAll(): Observable<Residente[]> {
		return this.http.get<Residente[]>(`${environment.API}/residentes`);
	}

	create(residente: Residente): Observable<Residente> {
		return this.http.post<Residente>(`${environment.API}/residentes`, residente);
	}

	update(residente: Residente): Observable<Residente> {
		const url = `${environment.API}residentes/${residente.id}`;
		return this.http.put<Residente>(url, residente);
	}

	readById(id: number): Observable<Residente> {
		const url = `${environment.API}residentes/${id}`;
		return this.http.get<Residente>(url);
	}

	delete(id: number): Observable<Residente> {
		const url = `${environment.API}residentes/${id}`;
		return this.http.delete<Residente>(url);
	}
}
