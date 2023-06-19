import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Porteiro } from "app/interface/porteiro";
import { environment } from "environments/environment";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData} from "@angular/fire/firestore";
import { Observable, from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PorteiroService {
  NOME_COLECAO = "porteiro";
  colecaoPorteiro : AngularFirestoreCollection<Porteiro>;
  private readonly URL_porteiros = `${environment.API}/porteiro`;

  constructor(private afs: AngularFirestore) {
    this.colecaoPorteiro = afs.collection(this.NOME_COLECAO);
  }

  getAll(): Observable<Porteiro[]> {
    return this.colecaoPorteiro.valueChanges({idField: 'id'});
  }

  create(porteiro: Porteiro): Observable<object> {
    delete porteiro.id;
    return from(this.colecaoPorteiro.add(Object.assign({}, porteiro))) 
  }

  excluirPorteiro(id: string | undefined): Observable<void> {
    return from(this.colecaoPorteiro.doc(id).delete());
  }

  atualizar(porteiro: Porteiro): Observable<void> {
    const id = porteiro.id
    delete porteiro.id;
    return from(this.colecaoPorteiro.doc(id).update(Object.assign({}, porteiro)));
  }

  buscarPorteiroPorId(id: string) {
    return this.colecaoPorteiro.doc(id).get();
  }
}
