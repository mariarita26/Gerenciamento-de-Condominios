import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Porteiro } from 'app/interface/porteiro';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorteiroService {

  constructor(
		private http: HttpClient,
	) { }

	getAll(): Observable<Porteiro[]> {
		return this.http.get<Porteiro[]>(`${environment.API}/porteiros`);
	}

	create(porteiro: Porteiro): Observable<Porteiro> {
		return this.http.post<Porteiro>(`${environment.API}/porteiros`, porteiro);
	}

	update(porteiro: Porteiro): Observable<Porteiro> {
		const url = `${environment.API}porteiros/${porteiro.id}`;
		return this.http.put<Porteiro>(url, porteiro);
	}

	readById(id: number): Observable<Porteiro> {
		const url = `${environment.API}porteiros/${id}`;
		return this.http.get<Porteiro>(url);
	}

	delete(id: number): Observable<Porteiro> {
		const url = `${environment.API}porteiros/${id}`;
		return this.http.delete<Porteiro>(url);
	}
}
