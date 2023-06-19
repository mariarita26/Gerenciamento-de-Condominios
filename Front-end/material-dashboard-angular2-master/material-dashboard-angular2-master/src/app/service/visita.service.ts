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
  NOME_COLECAO = 'visita';
  colecaoVisita: AngularFirestoreCollection<Visita>;

  private readonly URL_visitas = `${environment.API}/porteiro/visita`;

  constructor(private afs: AngularFirestore) {
    this.colecaoVisita = afs.collection(this.NOME_COLECAO);
  }

  registrarVisita(visita: Visita): Observable<object>{
      delete visita.idVisita;
      return from(this.colecaoVisita.add(Object.assign({}, visita)));
  }

  getAll(){
    return this.colecaoVisita.valueChanges({idField: 'id'});
  } 

  getVisitasByVisitanteId(visitanteId: string) {
    return this.colecaoVisita.doc(visitanteId).get();
  }

  // getVisitasPorPorteiro(idPorteiro: string): Observable<Visita[]> {
  //   const url = `${environment.API}?porteiroId=${idPorteiro}`;
  //   return this.http.get<Visita[]>(url);
  // }
}
